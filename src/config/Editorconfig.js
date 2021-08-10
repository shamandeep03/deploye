import "grapesjs/dist/css/grapes.min.css";
// import Script from ".../public/script";
const Editorconfig = () => {
  return {
    container: "#gjs",
    //dragMode: "relative",
    fromElement: true,
    storageManager: false,
    blockManager: {
      appendTo: "#blocks",
      blocks: [
        {
          id: "section", // id is mandatory
          label: "<b>Section</b>", // You can use HTML/SVG inside labels
          attributes: { class: "gjs-block-section" },
          content: `   
            <div class="card">
              <img src=
              "https://previews.123rf.com/images/jemastock/jemastock1706/jemastock170608711/80128439-young-and-successful-business-man-cartoon-employee-work.jpg"alt="John" style="width:100%">
              <h1>John Doe</h1>
              <p class="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
              <a href="#"><i class="fa fa-dribbble"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-linkedin"></i></a>
              <a href="#"><i class="fa fa-facebook"></i></a>
              <p><button>Contact</button></p>
            </div>
             <style>
             .card {
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
              max-width: 300px;
              margin-top: 100px;
              margin-right:auto;
              margin-left:auto;
              margin-bottom:auto:
              text-align: center;
            }
            
            .title {
              color: grey;
              font-size: 18px;
            }
            
            button {
              border: none;
              outline: 0;
              display: inline-block;
              padding: 8px;
              color: white;
              background-color: #000;
              text-align: center;
              cursor: pointer;
              width: 100%;
              font-size: 18px;
            }
            
            a {
              text-decoration: none;
              font-size: 22px;
              color: black;
            }
            
            button:hover, a:hover {
              opacity: 0.7;
            }
              </style>
            `,
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
