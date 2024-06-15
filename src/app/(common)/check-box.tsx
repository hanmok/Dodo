interface CheckBoxProps {
    isDone: boolean;
    onClick: () => void;
}

export default function CheckBox({ isDone, onClick }: Readonly<CheckBoxProps>) {
    console.log(`isDone: ${isDone}`);
    return (
        <button
            onClick={onClick}
            className="flex justify-center items-center w-[24px] h-[24px] bg-gray-900 border-white border-[2px] rounded-[6px]"
        >
            {isDone && (
                <div className="flex-1 flex justify-center items-center bg-gray-300 m-[4px] p-[6px] rounded-[2px]"></div>
            )}
        </button>
    );
}
