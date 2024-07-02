interface ModelButton {
  textBtn: string;
}
const Card_button = ({ textBtn }: ModelButton) => {
  return (
    <button className=" border border-slate-900 py-5 px-12">
      <span className="text-[28px] font-light">{textBtn}</span>
    </button>
  );
};
export default Card_button;
