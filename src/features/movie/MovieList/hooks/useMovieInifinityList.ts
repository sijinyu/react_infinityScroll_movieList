import React, { useCallback, useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieListModel, MoviesResponseModel } from "../model";
import moviesQueryKeysConstant from "../../constants/queryKeys";
import { movieListState } from "@store/movieAndFavorit";
import { useRecoilState } from "recoil";
import http from "@lib/axios";

const messageEnToKr = [
  { message: "Movie not found!", krMessage: "검색 결과가 없습니다." },
  {
    message: "Too many results.",
    krMessage: "검색 결과가 너무 많습니다. 자세히 적어주세요. ",
  },
];

const useMovieInifinityList = (query: string) => {
  const currentCount = useRef(0);
  const observerRef = useRef<IntersectionObserver>();
  const boxRef = useRef<HTMLDivElement>(null);
  const resultMessage = useRef("");
  const [error, setError] = useState("검색 결과가 없습니다.");
  const [movieList, setMovieList] =
    useRecoilState<MovieListModel[]>(movieListState);

  // Movie Error Message 영어에서 한글로 변환하는 함수
  const handleMessageEnToKr = (message: string) =>
    messageEnToKr.find((msgBox) => msgBox.message === message)?.krMessage || "";

  // 이전 배열의 길이 + 현재 배열 길이 ,총 리스트 길이를 판별할때 필요한 함수
  const handleCurrentCount = (currentLength: number, prevLength: number) => {
    currentCount.current = prevLength + currentLength;
  };

  const {
    isFetching,
    data: infiniteList,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    [moviesQueryKeysConstant.getGetAll(), query],

    async ({ pageParam = 1 }) => {
      //Response False일시 선언되는 Error메세지를 담기 위해 API 콜마다  초기화
      try {
        resultMessage.current = "";
        const { Response, Search, totalResults, Error } =
          await http.get<MoviesResponseModel>(`/`, {
            params: {
              apikey: moviesQueryKeysConstant.getApiKey(),
              page: pageParam,
              s: query,
            },
          });

        // Response False 일시 Movie Api에서 제공 해주는 Error 객체 할당
        if (Response === "False") {
          resultMessage.current = Error;
        }
        if (pageParam === 1) {
        }
        handleCurrentCount(Search?.length, movieList?.length);

        return {
          data: Search,
          nextPage: pageParam + 1,
          // 현재 보여지는 리스트 수보다 총 리스트 아이템 수 보다 크거나 같을 시 인피니트 스크롤 중단
          isLast: currentCount.current >= Number(totalResults),
        };
      } catch (error: any) {
        console.error("GET /movies error 발생! catch", error);
      } finally {
        setError(handleMessageEnToKr(resultMessage.current));
      }
    },
    {
      enabled: query.length > 0,
      getNextPageParam: (lastPage) => {
        if (resultMessage.current) return undefined;
        if (!lastPage?.isLast) return lastPage?.nextPage;
        return undefined;
      },
    }
  );

  const intersectionObserver = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 관찰하고 있는 entry가 화면에 보여지는 경우
          observer.unobserve(entry.target); // entry 관찰 해제
          if (hasNextPage && !isFetching && !resultMessage.current) {
            fetchNextPage(); // 다음 페이지 데이터 요청
          }
        }
      });
    },
    [infiniteList]
  );

  useEffect(() => {
    currentCount.current = 0;
  }, [query]);

  useEffect(() => {
    if (!boxRef.current) return;
    observerRef.current = new IntersectionObserver(intersectionObserver); // IntersectionObserver 새롭게 정의

    boxRef.current && observerRef.current.observe(boxRef.current); // boxRef 관찰 시작
    return () => observerRef.current?.disconnect();
  }, [boxRef, intersectionObserver]); // res값이 변경될때마다 실행

  useEffect(() => {
    if (infiniteList?.pages.every((item) => item?.data !== undefined)) {
      let pagesList = infiniteList.pages.flatMap(({ data }: any) => data);
      setMovieList(pagesList);
    }
  }, [infiniteList]);

  return {
    isFetching,
    ref: boxRef,
    movieList,
    errorMessage: error,
  };
};

export default useMovieInifinityList;
