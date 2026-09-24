export type ProjectProps = {
    id: number;
    name: string;
    date: string;
    technos: string;
    weblink: string | null;
    background: string;
    githublink: string | null;
};

export type ProjectDetailsProps = Omit<ProjectProps, "background"> & {
    description: string | null;
    detailPic: string;
    detail_pic_mobile: string | null;
};
