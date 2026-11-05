/**
 * Content hooks: the only place components get menu / schedule / gallery data from.
 *
 * Phase 1 (now): return the local data in src/data/*.ts.
 * Phase 2 (dynamic): replace each body with a React Query call, e.g.
 *
 *   export const useMenu = () =>
 *     useQuery({ queryKey: ["menu"], queryFn: () => fetch("/api/menu").then((r) => r.json()) });
 *
 * The return shape ({ data, isLoading }) already matches useQuery, so components don't change.
 */
import { menu, type MenuCategory } from "@/data/menu";
import { schedule, scheduleNote, type Stop } from "@/data/schedule";
import { gallery, type GalleryItem } from "@/data/gallery";

type Result<T> = { data: T; isLoading: boolean };

const local = <T,>(data: T): Result<T> => ({ data, isLoading: false });

export const useMenu = (): Result<MenuCategory[]> => local(menu);

export const useSchedule = (): Result<{ note: string; stops: Stop[] }> =>
  local({ note: scheduleNote, stops: schedule });

export const useGallery = (): Result<GalleryItem[]> => local(gallery);
