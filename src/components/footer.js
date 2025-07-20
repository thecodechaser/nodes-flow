export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-center w-full text-sm text-gray-600">
      <p>
        © {year} Nodes Flow. All rights reserved.{" "}
        <a
          href="https://thecodechaser.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          thecodechaser.com
        </a>
      </p>
    </footer>
  );
};