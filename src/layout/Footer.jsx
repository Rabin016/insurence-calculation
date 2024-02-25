import myLogo from "../assets/My-Logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-200 rounded-lg my-2 flex justify-end items-center p-3 md:max-w-3xl mx-auto">
      <p className="text-indigo-600">Created by:</p>
      <a
        className="w-2/5 md:w-1/6"
        target="_blank"
        href="https://life-rc.com"
        rel="noreferrer"
      >
        <img className="w-full" src={myLogo} alt="Life RC" />
      </a>
    </footer>
  );
}
