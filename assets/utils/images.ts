// au cas où les noms d'images en base soient en jpg ou png
export function toWebp(fileName: string): string;
export function toWebp(fileName: string | null): string | null;
export function toWebp(fileName: string | null): string | null {
    return fileName?.replace(/\.(jpe?g|png)$/i, ".webp") ?? null;
}

export const projectImageUrl = (fileName: string): string =>
    `/images/projects/${toWebp(fileName)}`;
