import dayjs from "dayjs";

interface HeaderProps {
    category: string;
}

export default function HeaderPage({ category }: Readonly<HeaderProps>) {
    return (
        <h1>
            <span>{dayjs().format("YYYY M D")}</span> on{" "}
            <span className="ml-[6px]">{category}</span>
        </h1>
    );
}
