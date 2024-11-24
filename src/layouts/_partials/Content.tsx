import React from 'react';

const Content: React.FC = () => {
    return (
        <div className="flex flex-col flex-1 p-4 bg-gray-100">
            <h1 className="text-lg font-semibold">Conteúdo</h1>
            <hr className="mx-2 border-t border-gray-300" />
            <RepeatedParagraphs times={20} />
        </div>
    );
};

const Paragraph: React.FC = () => {
    return (
        <p className="my-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero nec dolor lacinia dignissim bibendum varius. Mauris ac tempor tortor dignissim bibendum varius
        </p>
    );
};

const RepeatedParagraphs: React.FC<{ times: number }> = ({ times }) => {
    const paragraphs = [];
    for (let i = 0; i < times; i++) {
        paragraphs.push(<Paragraph key={i} />);
    }
    return <div>{paragraphs}</div>;
};

export default Content;
