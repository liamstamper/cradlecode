const Footer = () => {
  return (
    <footer class="mx-auto dark:bg-black dark:text-white">
      <div class=" max-w-[70rem] container mx-auto py-4 flex justify-between items-center">
        <div class="flex space-x-4">
          <a href="#" class="text-sm hover:underline">
            Privacy
          </a>
          <a href="#" class="text-sm hover:underline">
            Terms
          </a>
        </div>
        <div class="text-sm">&copy; 2024 CradleCode</div>
      </div>
    </footer>
  );
};

export default Footer;
