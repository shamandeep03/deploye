import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import parserPostCSS from "grapesjs-parser-postcss";
// import Script from ".../public/script";
const Editorconfig = () => {
  return {
    container: "#gjs",
    fromElement: true,
    // canvas: {
    //   scripts: [Script],
    // },
    storageManager: false,
    plugins: [parserPostCSS],
    blockManager: {
      appendTo: "#blocks",
      blocks: [
        {
          id: "section", // id is mandatory
          label: "<b>Section</b>", // You can use HTML/SVG inside labels
          attributes: { class: "gjs-block-section" },
          content: `<section>
                    <h1>This is a simple title</h1>
                    <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
                  </section>`,
        },
        {
          id: "text",
          label: "Text",
          content: '<div data-gjs-type="text">Insert your text here</div>',
        },
        {
          id: "input",
          placeholder: "input",
          label: "input",
          content: '<input type="text" value="example" name="text"/>',
        },
        {
          id: "input",
          label: "Radio",
          content: '<input type="radio" value="example" name="radio"/>',
        },
        {
          id: "Checkbox",
          placeholder: "Checkbox",
          label: "Checkbox",
          content: '<input type="checkbox"  name="Checkbox" />',
        },
        {
          id: "lable",
          label: "lable",
          content: "<lable>Lable</lable>",
        },
        {
          id: "Button",
          label: "Button",
          content: "<button>Button</button>",
        },
        {
          id: "form",
          label: "from",
          content:
            '<form><label>Name:</label><br/><input type="text" name="name" placeholder="name"/><br/><label>Age:</label><br/><input type="text" name="age" placeholder="age"/><br/><label>Email:</label><br/><input type="email" name="email" placeholder="email"/><br/><label>Name:</label><br/><input type="password" name="password" placeholder="password"/><br/><label for="gender">male</label><input type="radio" name="gender" checked/><label for="gender">female</label><input type="radio" name="gender"/></form>',
        },
        {
          id: "image",
          label: "Image",
          // Select the component once it's dropped
          select: true,
          // You can pass components as a JSON instead of a simple HTML string,
          // in this case we also use a defined component type `image`
          content: { type: "image" },
          // This triggers `active` event on dropped components and the `image`
          // reacts by opening the AssetManager
          activate: true,
        },
      ],
    },
  };
};

export default Editorconfig;
