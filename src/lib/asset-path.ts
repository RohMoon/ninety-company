// next/image 는 unoptimized + basePath 일 때 src 에 basePath 를 붙이지 않으므로 직접 붙인다
export function assetPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
