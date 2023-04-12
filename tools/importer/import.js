export default {
  transformDOM: ({ document }) => {
    const main = document.querySelector(".PageHome" );
    main
      .querySelector("header, .layout_footer")
      .forEach((el) => el.remove());
    return main;
  },
};
