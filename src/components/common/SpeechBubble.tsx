type SpeechBubbleProps = {
  className?: string;
  children: React.ReactNode;
};
const SpeechBubble: React.FC<SpeechBubbleProps> = ({ children, className }) => {
  return (
    <p
      className={
        className +
        ' relative bg-secondary-100 p-6 pl-4 rounded-3xl border-l-8 lg:border-l-[17px] border-secondary-100 h-fit before:absolute before:-left-8 before:bottom-0 before:h-8 before:border-[32px] before:rounded-br-6xl before:rounded-bl-lg before:border-secondary-100 before:-z-10 after:absolute after:-left-[4.5rem] after:bottom-0 after:h-8 after:border-[32px] after:rounded-br-4xl after:border-white after:-z-10'
      }
    >
      {children}
    </p>
  );
};

export default SpeechBubble;
