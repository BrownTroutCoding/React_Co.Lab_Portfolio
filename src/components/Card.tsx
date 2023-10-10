type CardProps = {
    type: string;
    title: string;
    date: string;
};

export default function Card({ type, title, date}: CardProps) {
    return (
        <div className="mx-auto max-w-lg border bg-white bg-opacity-50 rounded p-4 my-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-500">{date}</p>
            <p className="text-gray-400">{type}</p>
        </div>
    );
}
