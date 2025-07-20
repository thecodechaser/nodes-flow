// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
      className="cursor-grab min-w-[90px] h-[50px] rounded-md bg-gray-900 text-white flex items-center justify-center shadow-md hover:shadow-lg hover:bg-gray-800 transition-all duration-150"
    >
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};
