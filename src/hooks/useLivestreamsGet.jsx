import { useQuery } from "@tanstack/react-query";
import { getLivestreams } from "../services/livestreamsAPI";
import { useSearchParams } from "react-router";

export default function useLivestreamsGet() {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;
  const pageSize = searchParams.get("pageSize") || 20;

  return useQuery({
    queryKey: ["livestreams", page, pageSize],
    queryFn: () =>
      getLivestreams({
        pageIndex: page,
        pageSize,
      }),
  });
}
