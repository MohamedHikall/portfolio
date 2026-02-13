import { InterestsData } from '@/data/mock/InterestsData'

interface InterestsProps {
    selectedIds: number[];
    onToggle: (id: number) => void;
}

const Interests = ({ selectedIds, onToggle }: InterestsProps) => {

    return (
        <>
            {InterestsData.map((item) => {
                const isSelected = selectedIds.includes(item.id);
                return (
                    <button
                        key={item.id}
                        onClick={() => onToggle(item.id)}
                        className={`py-3 px-8 md:py-4 md:px-10 border rounded-full hover:bg-white hover:text-black text-lg md:text-xl font-medium transition-all duration-300 active:scale-95 whitespace-nowrap cursor-pointer 
                        ${isSelected ? "bg-white text-black border-white" : "border-gray-light text-white hover:border-white"}`} >
                        {item.title}
                    </button>
                );
            })}
        </>
    );
}

export default Interests