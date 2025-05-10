const CustomButton = ({
    disabled,
    isRounded,
}: {
    disabled: boolean;
    isRounded: boolean;
}) => {
    return (
        <button
            className = {`text-sm ${disabled ? "bg-gray-300" : "bg-blue-500"} ${isRounded && "rounded-full"}p-4`}
            >
                Hello

            </button>
    );
};


export default CustomButton;

