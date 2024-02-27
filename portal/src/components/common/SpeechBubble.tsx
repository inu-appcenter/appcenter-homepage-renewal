type SpeechBubbleProps = {
  className?: string;
  children: React.ReactNode;
};
const SpeechBubble: React.FC<SpeechBubbleProps> = ({ children, className }) => {
  return (
    <p
      className={
        className +
        ' relative bg-secondary-100 p-6 pl-4 rounded-2xl h-fit before:absolute before:-left-8 before:bottom-0 before:h-14 before:w-16 before:rounded-br-6xl before:rounded-bl-xl before:bg-secondary-100 before:-z-10 after:absolute after:left-0 after:bottom-0 after:-translate-x-full after:w-9 after:h-16 after:bg-white after:rounded-br-7xl'
      }
    >
      {children}
    </p>
  );
};

export default SpeechBubble;
