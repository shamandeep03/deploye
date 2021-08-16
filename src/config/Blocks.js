export default function Block() {
  return [
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
          text-align: center;
          max-width: 300px;
          margin-top: 100px;
          margin-right:auto;
          margin-left:auto;
          margin-bottom:auto:
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
      id: "team section",
      className: "bocksbuttob",
      label:
        "<img src='https://i.pinimg.com/originals/34/4c/0c/344c0c3743879914e8be088b5a7ed034.jpg' style='height:100px; width: 100%;'/>",
      content: `
        <div class="container" eid="1828ccd3-1add-4718-b8f3-4be1bc4af31b"><div class="row" eid="a8501308-e73e-4cea-be4a-26065b66cfb1" style=""><div class="col md:w-8/12 mx-auto text-center mb-12" eid="3e5cf501-46cf-459a-87d4-c58342d06187" style=""><h2 class="display-4 font-semibold mb-3" eid="8b792dc5-50f7-4e23-896c-d66a933ff4fd" style=""><span class="d-inline-block inline-block" eid="87ad117b-6f9b-44df-9b9a-0d70db019b60" style="font-weight: 600;font-size: 3.5rem;">The Acme Inc Team</span><br eid="1e43ccee-6426-4204-bedd-085f6e993289"></h2><p class="text-lg font-light" eid="2b4091cb-eda5-4e39-8635-bdf8087e0bc4" style="outline: rgb(19, 124, 189) solid 2px; position: relative;"><div class="" disabled="" contenteditable="false" style="outline: none; display: inline-block; font-weight: 300;     font-size: 1.125rem;
    line-height: 1.75rem;"><text>We're a fully distributed team, meaning that we'll be fixing bugs and replying to your questions from around the world!fff</text></div></p></div></div><div class="row text-center md:text-left" eid="3852d87f-eab4-43f7-a4ab-4d6a4efec1aa"><div class="col md:w-8/12 lg:w-6/12 flex flex-col md:flex-row items-center mx-auto mb-6" eid="73548157-d368-42d4-9d82-4ea06c162859" style=""><img class="w-[150px] lg:w-[200px] mb-5 md:mb-0 imagesteam" src="https://templates.versoly.com/assets/img/headshot-woman-1.jpg" eid="ef1be39a-e4ce-481b-8685-b724387a84db" style=""><div class="w-full px-5" eid="dd77f24f-19de-47e9-9c2b-7d8d10ca0e41" style=""><h5 eid="17ca6e5b-b4f4-4a25-a4c2-33085ef3ff9c" style="">Rhiana Bostock</h5><p class="text-sm mb-2" eid="b4200928-8964-4b70-ae0c-194249822bfd" style="">Founder</p><p class="text-muted" eid="77b5f185-ff3f-44ec-a944-499ff5a86fa5" style="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><div class="inline-flex flex-row gap-x-3" eid="0aad0af4-a125-4b79-91b2-41841caad11f"><a href="javascript:void(0);" title="linkedin" eid="41379148-0d24-4512-8ec3-a0e107659732"><i class="fab fa-linkedin text-3xl" eid="d7a54a3d-3b9b-495a-824d-36370d82ad19"></i>hello</a> <a href="javascript:void(0);" title="twitter" eid="867b01a2-6e33-4190-9bfa-6924cc2867b7"><i class="fab fa-twitter text-3xl" eid="9ca6e46e-121e-4a9c-9a28-88b7a54688fd"></i></a> <a href="javascript:void(0);" title="facebook" eid="0a670b52-cb3f-4521-88ea-f1a8632b626d"><i class="fab fa-facebook text-3xl" eid="1ba42fa0-b88a-4b88-b775-d22a9ca8705c"></i></a></div></div></div><div class="col md:w-8/12 lg:w-6/12 flex flex-col md:flex-row items-center mx-auto mb-6" eid="00ee89b9-9274-459b-8beb-ca3f36528834" style=""><img class="w-[150px] lg:w-[200px] mb-5 md:mb-0 imagesteam" src="https://templates.versoly.com/assets/img/headshot-man-1.jpg" eid="da206489-e230-4265-8e93-a38bd1462f96" style=""><div class="w-full px-5" eid="672e2157-56ba-451b-ba3b-69b11b359a06"><h5 eid="baacd77c-4073-421e-ad7a-31979e582c6e" style="">Corey Jacobson</h5><p class="text-sm mb-2" eid="a802b32f-34e2-477c-aaab-653b8758b248">CTO</p><p class="text-muted" eid="4ce2f159-bf89-4be1-a4ec-851ac17970c7" style="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><div class="inline-flex flex-row gap-x-3" eid="03038fea-4d0e-4a9a-8f5d-73a36332bab7"><a href="javascript:void(0);" title="linkedin" eid="162c24c3-e701-4172-bf79-5c10a6e23abe"><i class="fab fa-linkedin text-3xl" eid="f2c4aab0-bf8c-4c7b-8fc5-3c3fd469d111"></i></a> <a href="javascript:void(0);" title="twitter" eid="2597db52-94a6-4978-a641-cf3abb4a9db1"><i class="fab fa-twitter text-3xl" eid="03cb453a-16dc-4523-8a2d-7b6def11953e"></i></a> <a href="javascript:void(0);" title="facebook" eid="76ce7fc5-322f-4a71-ae2f-d311e348668d"><i class="fab fa-facebook text-3xl" eid="a1888898-b064-4d88-bfc8-08cdc68c7819"></i></a></div></div></div><div class="col md:w-8/12 lg:w-6/12 flex flex-col md:flex-row items-center mx-auto mb-6" eid="980fbccb-f570-4cc0-9d6c-23594d527b78" style=""><img class="w-[150px] lg:w-[200px] mb-5 md:mb-0 imagesteam" src="https://templates.versoly.com/assets/img/headshot-man-2.jpg" eid="dee67c64-a7c1-43a4-859d-7861fc058dc1"><div class="w-full px-5" eid="0f867127-3f8e-441f-b7b2-3c6c41598e02"><h5 eid="2c5356d4-208f-4524-97bf-3488b4eed5a7" style="">Bobby O'Sullivan</h5><p class="text-sm mb-2" eid="06e147c7-22ef-4afc-912a-a785ba72927b">Full Stack Developer</p><p class="text-muted" eid="4e5d9609-3123-4fdf-abd0-488a362ca78a">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><div class="inline-flex flex-row gap-x-3" eid="5d893eaa-3bf0-41dd-a67f-91c52af5f210"><a href="javascript:void(0);" title="linkedin" eid="2f83e19e-95c2-4d06-9d7a-33b97cfc9bd8"><i class="fab fa-linkedin text-3xl" eid="c70809ce-54e7-4f5e-ae82-836629b0079c"></i></a> <a href="javascript:void(0);" title="twitter" eid="4703597b-d971-4854-922a-889f9642b605"><i class="fab fa-twitter text-3xl" eid="cd0f5d46-6744-45fc-8529-596d0b26fb44"></i></a> <a href="javascript:void(0);" title="facebook" eid="6fc24922-89e5-4b90-8f93-0204f6cc4db5"><i class="fab fa-facebook text-3xl" eid="f27f903b-8c65-40f5-8482-ac3c7f63fc5f"></i></a></div></div></div><div class="col md:w-8/12 lg:w-6/12 flex flex-col md:flex-row items-center mx-auto mb-6" eid="ca734d97-5316-417f-9dfc-1091e9e4185b" style=""><img class="w-[150px] lg:w-[200px] mb-5 md:mb-0 imagesteam" src="https://templates.versoly.com/assets/img/headshot-woman-2.jpg" eid="88b6d8f1-1b65-42f3-8e56-3fc2e08ce6c5"><div class="w-full px-5" eid="0e668140-63ac-43c1-8028-df4ccc4a9853"><h5 eid="951c99be-debc-4cd1-a774-0a3ca21900a8">Daniele Beaumont</h5><p class="text-sm mb-2" eid="c54e66d7-60ad-4bb3-9cfb-e0cc08917086">UI/UX Designer</p><p class="text-muted" eid="dd32b345-220c-49e9-83d1-2389c01b460a">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><div class="inline-flex flex-row gap-x-3" eid="97f19039-063b-4ff7-8ab7-f6eaf0767b02"><a href="javascript:void(0);" title="linkedin" eid="ae36b3c3-2bcf-4984-ade9-dd95cb59b64a"><i class="fab fa-linkedin text-3xl" eid="09f9e1aa-05ba-4db5-840a-9eecfb590a6c"></i></a> <a href="javascript:void(0);" title="twitter" eid="12887cdd-76cf-44a7-bf58-34f4781a2eb9"><i class="fab fa-twitter text-3xl" eid="1ced4dff-6531-426d-b6b1-2cfc383a3b01"></i></a> <a href="javascript:void(0);" title="facebook" eid="cbd0ee21-6ec3-461f-b11c-b0079e8a0066"><i class="fab fa-facebook text-3xl" eid="95d29d3a-b755-48e7-a651-25f73e68ff03"></i></a></div></div></div></div></div>
    <style>
    .imagesteam {
      border-radius: 9999px;
      border-top-left-radius: 9999px;
      border-top-right-radius: 9999px;
      border-bottom-right-radius: 9999px;
      border-bottom-left-radius: 9999px;
  }
  p.text-lg.font-light {
  outline: none !important;
  font-size: 1.125rem !important;
  line-height: 1.75rem !important;
  font-weight: 300;
  margin-bottom: 0.75rem;
  ;}
  </style> 
        `,
    },
    {
      id: "client section",
      label: "team-section",
      content: `
        <div class="container"  style="background-color: aliceblue">
        <div
          class="row"
          eid="e417a713-e974-407b-b1de-9ad64a60ac72"
          style="background-color: aliceblue"
        >
          <div
            class="col lg:w-3/12 md:w-6/12"
            eid="52cc0296-973d-43ea-96f8-32561ed7a951"
          >
            <h2
              class="text-6xl font-semibold text-primary"
              eid="a22beebc-ebb6-469c-be74-53644de3385f"
              style=""
            >
              200%
            </h2>
            <p
              class="text-lg font-light font-normal"
              eid="751a9ce2-1778-418d-b8fd-368928ae623e"
            >
              Faster page speed
            </p>
            <p eid="49cd947e-424b-4084-b0a9-aaf8a7af30dd">
              With Versoly your pages load 10 times faster. Users never have to
              wait for a page to load.
            </p>
          </div>
          <div
            class="col lg:w-3/12 md:w-6/12"
            eid="59a9e485-5e5d-46c8-9475-6fa9ef7ad650"
          >
            <h2
              class="text-6xl font-semibold text-primary"
              eid="05f5c1b6-3e0f-492c-8fa4-6a816c35bd93"
              style=""
            >
              40%
            </h2>
            <p
              class="text-lg font-light font-normal"
              eid="8c894b4c-d518-4914-b010-8faab34dcf5c"
            >
              Increase in sales
            </p>
            <p eid="7e97c8f7-dfe5-456e-8313-1e455f7f0e4a">
              A faster loading page will increase sales due to less visitors
              leaving before the page loads.
            </p>
          </div>
          <div
            class="col lg:w-3/12 md:w-6/12"
            eid="4cd94ae6-60b0-4356-ac9d-98a41af39280"
          >
            <h2
              class="text-6xl font-semibold text-primary"
              eid="0786cb50-270e-44b8-ac77-acff0769541f"
              style=""
            >
              25%
            </h2>
            <p
              class="text-lg font-light font-normal"
              eid="9f955673-b8fd-4fbb-aff2-30b960d97e07"
            >
              Increased Conversion
            </p>
            <p eid="76b9d777-9589-4b47-9e8c-dc20e64f36a5">
              Even a second in delay for mobile page load times can reduce
              conversions.
            </p>
          </div>
          <div
            class="col lg:w-3/12 md:w-6/12"
            eid="c329f906-7ab5-4af3-bbc8-47b3712a526e"
            style=""
          >
            <h2
              class="text-6xl font-semibold text-primary"
              eid="db993856-62e0-4f26-9d84-51ad2f43ee8c"
            >
              95%
            </h2>
            <p
              class="text-lg font-light font-normal"
              eid="69ad0ed7-bfc8-4726-99b1-2564da906c2f"
            >
              Customer satisfaction
            </p>
            <p eid="c78e0168-6f7a-4aab-b023-a20fbfdd4900">
              Our customers love the boost in conversions they get.
            </p>
          </div>
        </div>
      </div>
      <style>
     
      </style>
        `,
    },
    {
      id: "Testimonials section",
      label: "Testimonials-section",
      content: `
        <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
        <section
        class="py-28 bg-primary text-white"
        id="testimonials"
        eid="a360fdb7-26a0-44af-bfac-8c4743dc0967"
        style=""
      >
        <div class="container" eid="27718ebd-0f8a-437d-a6ef-79fa9ebcfdd0">
          <div class="row" eid="70637d0c-8687-4145-aba3-ea9e259d9d01">
            <div
              class="col text-center w-full"
              eid="ab9f0b2b-1d56-48a0-a69d-892b78c2890f"
              style=""
            >
              <h2
                class="pb-6"
                eid="59a1bd69-42f8-4b3e-9bb7-2fdba3dc3409"
                style="color :white"
              >
                &amp;quot;Pellentesque iaculis vestibulum convallis. Vestibulum
                nec risus tincidunt, eleifend lacus a, rhoncus elit. Ut tellus
                urna, malesuada eu faucibus nec, consequat vel elit. Curabitur nec
                tristique nunc.&amp;quot;
              </h2>
              <img
                alt="product"
                class="max-w-full h-auto rounded-full mb-6"
                src="https://templates.versoly.com/assets/img/headshot-woman-1.jpg"
                width="150"
                eid="542725ac-a38e-4f3e-9bc6-1b6c52985bc9"
              />
              <p
                class="text-lg font-light font-normal"
                eid="e69601cb-ad79-4cd3-8a2a-6b2b24e0ee7f"
                style=""
              >
                Rhiana Bostock<br
                  eid="29b84dbb-2870-447b-aef8-8a43bd7ac546"
                />Head of Marketing at ACME
              </p>
            </div>
          </div>
        </div>
      </section>
      <style>
        .rounded-full {
          border-radius: 9999px;
          border-top-left-radius: 9999px;
          border-top-right-radius: 9999px;
          border-bottom-right-radius: 9999px;
          border-bottom-left-radius: 9999px;
        }
      </style>
        `,
    },
    {
      id: "pricing section",
      label: "pricing-section",
      content: `
         <div class="container">
         <section
           class="py-28"
           id="pricing"
           eid="59a10a59-12aa-44d2-9c37-33ba7a8490bd"
           style=""
         >
           <div class="container" eid="3a409bca-945a-4aab-a72a-cb9d903d1eba">
             <div class="row" eid="59610983-095e-4253-abb8-57111aacd1ad">
               <div
                 class="col md:w-10/12 lg:w-8/12 mx-auto text-center mb-6"
                 eid="43f9011e-d1cc-4158-9eb6-d7eb346e85d3"
               >
                 <h2
                   class="display-6 font-semibold mb-3"
                   eid="b743d604-e14f-4a06-b3b1-a8a7b86f631a"
                   style="
                     margin-bottom: 0.75rem;
                     font-weight: 600;
                     font-size: 2.5rem;
                   "
                 >
                   Our Pricing
                 </h2>
                 <p
                   eid="57e229df-dc1e-4b4e-986b-4e3d87f3fa7a"
                   style="margin-bottom: 0.75rem"
                 >
                   No additional costs. Pay a fixed monthly fee we handle
                   everything for you.
                 </p>
               </div>
             </div>
             <div
               class="row items-center"
               eid="02ec4e3e-0ba2-4557-afc0-863cb6581729"
             >
               <div
                 class="col md:w-8/12"
                 eid="a8e671cc-cb68-419a-bdc5-8e4d983e5a28"
                 style=""
               >
                 <div
                   class="row md:mr-6 lg:mb-12"
                   eid="19445115-eb3a-4b13-9a76-df4d5394b011"
                 >
                   <div
                     class="col lg:w-6/12 mb-12"
                     eid="5ce60280-10fb-40b7-be3b-2fc5713f2662"
                   >
                     <div
                       class="text-5xl text-primary mb-2"
                       eid="ef30daaa-47e5-4a0b-adf6-07e12ab8cc70"
                     >
                       <span>
                         <i class="fa fa-life-ring" aria-hidden="true"></i>
                       </span>
                     </div>
                     <h4 class="mb-2" eid="1ea4ca3a-8e8d-49e1-a44f-3cfec642a4d6">
                       24/7 Friendly Support
                     </h4>
                     <p class="mb-0" eid="dc38f6f1-a615-46b8-b041-fa587af008b7">
                       Our over 30 full-time experienced folks ready to help you
                       anytime with any issues. Chat with us anytime.
                     </p>
                   </div>
                   <div
                     class="col lg:w-6/12 mb-12"
                     eid="ea2c4e42-fc06-4f21-9ceb-aa0dd23cd90b"
                     style=""
                   >
                     <div
                       class="text-5xl text-primary mb-2"
                       eid="102f747a-446b-4656-8bb8-b77168996409"
                     >
                       <span>
                         <i class="fa fa-bug" aria-hidden="true"></i>
                       </span>
                     </div>
                     <h4 eid="1d4167ed-04a1-4703-9005-4fedd0c1b71d" style="">
                       AI Autofix
                     </h4>
                     <p
                       class="mb-0"
                       eid="a02874b5-6259-4e9e-8221-d3a069bcf3a9"
                       style=""
                     >
                       Now, your server never shuts down. Our AI technology solves
                       any issues on the server side and fixes instantly.
                     </p>
                   </div>
                 </div>
                 <div
                   class="row md:mr-6"
                   eid="b9f5a422-dd3a-45ff-815f-61608fb640e1"
                 >
                   <div
                     class="col lg:w-6/12 mb-12 lg:mb-0"
                     eid="a9083cc3-4765-45ff-9ec0-aa1e26ef8dac"
                   >
                     <div
                       class="text-5xl text-primary mb-2"
                       eid="2f6bd578-205d-44a1-8d8c-fdbe8ab7dddf"
                     >
                       <i
                         class="fa fa-star"
                         eid="cab3e745-bed1-474f-ac69-028472ce99f4"
                       ></i>
                     </div>
                     <h4 eid="6d01a617-8908-4c6a-ba32-e295194cefd4">
                       No additional costs
                     </h4>
                     <p class="mb-0" eid="c86b3879-b10c-4a32-b280-a0ee9e70964d">
                       Choose the most suitable service for your needs with monthly
                       fixed price.
                     </p>
                   </div>
                   <div
                     class="col lg:w-6/12 mb-12 lg:mb-0"
                     eid="526638f2-aab3-46de-9fa8-1e83af2e747b"
                   >
                     <span>
                       <i
                         class="fa fa-fire text-primary text-5xl"
                         eid="cab3e745-bed1-474f-ac69-028472ce99f4"
                       ></i>
                     </span>
   
                     <h4 eid="7bf17083-f141-4260-a7e4-cb557c6cfce4">
                       Instant Results
                     </h4>
                     <p class="mb-0" eid="c9e107b4-1911-4d7b-bdcb-93894ded6389">
                       No need to wait until your data is updated, now it will be
                       updated instantly.
                     </p>
                   </div>
                 </div>
               </div>
               <div
                 class="col md:w-4/12 my-12"
                 eid="e446546b-0231-43ba-8a7f-ed10c1541f1e"
               >
                 <div
                   class="
                     card
                     p-6
                     text-center
                     flex flex-col
                     min-w-0
                     rounded
                     break-words
                     border
                     bg-white
                     border-1 border-grey-light
                   "
                   eid="27f4cd66-3ca7-4122-9937-6c00fe8b25ef"
                 >
                   <h2
                     class="block font-semibold mb-12"
                     eid="55a8e802-3f68-4d34-b96f-2cb6673cda36"
                   >
                     $15
                     <small eid="67c98e68-42b4-44d1-863e-7259f3411ce8"
                       >per month</small
                     >
                   </h2>
                   <ul
                     class="list-unstyled mb-12"
                     eid="9ea9344f-aeed-4976-ac98-87cc2953867d"
                   >
                     <li class="mb-6" eid="fa4b98a9-2c5d-4f4b-a06d-5943f895be7b">
                       200GB of Space
                     </li>
                     <li class="mb-6" eid="51c027ad-8dde-4f26-a8a4-950db71fdcec">
                       Unlimited Traffic
                     </li>
                     <li class="mb-6" eid="913f3e72-ecf9-4a41-a9c0-08d614922f88">
                       Online Support
                     </li>
                     <li class="mb-6" eid="f3abfab1-2422-4306-8293-2c183cb527cc">
                       24 hour Support
                     </li>
                   </ul>
                   <a
                     class="btn btn-primary btn-lg w-full"
                     href="javascript:void(0);"
                     eid="524b6e41-6c6a-4a77-843c-a9378260a7cf"
                     >Get Started Now</a
                   >
                 </div>
               </div>
             </div>
           </div>
         </section>
       </div>
       <style>
         .mb-12 {
           margin-bottom: 3rem;
           margin-top: 3rem;
         }
         .col {
           width: 100%;
           padding-left: 1.25rem;
           padding-right: 1.25rem;
         }
   
         @media (min-width: 1024px) {
           .lg\:w-6\/12 {
             width: 50%;
           }
         }
         .text-primary {
           --tw-text-opacity: 1;
           color: rgba(79, 70, 229, var(--tw-text-opacity));
         }
         .mb-2 {
           margin-bottom: 0.5rem;
         }
         .text-5xl {
           font-size: 3rem;
           line-height: 1;
         }
         @media (min-width: 768px) {
           .md\:w-4\/12 {
             width: 33.3333%;
           }
         }
       </style>
         `,
    },
    {
      id: "steps section",
      label: "Steps-section",
      content: `
        <div class="container">
        <section
          class="py-20"
          id="steps"
          eid="32308f1a-bafd-465f-8c45-9597874b286c"
          style=""
        >
          <div
            class="container"
            eid="143a7526-894b-446c-aa6c-75a7d2e38091"
            style=""
          >
            <div class="row" eid="96761be5-5975-4875-ac22-233f339e9ef5">
              <div
                class="col"
                eid="d5e34c50-5a4f-46bb-9366-5bacd30e0fb8"
                style=""
              >
                <div
                  class="bg-primary rounded-full mt-0 mb-6 mx-auto w-[50px] h-1"
                  eid="65d5f94a-7204-4371-a61f-0ac6e3967e37"
                ></div>
                <h2
                  class="display-5 letter-spacing-xs text-center font-black"
                  eid="fd8bfbc9-3927-4742-ac45-89d5908695f9"
                  style="font-size: calc(1.425rem + 2.1vw); line-height: 1.2"
                >
                  A quick and short pitch of<br
                    eid="2aaf555e-2f99-4c5f-ab90-d8f612623770"
                  />what your product does
                </h2>
              </div>
            </div>
            <div
              class="row mt-20"
              eid="17b4a434-8c59-43ef-90da-20e9201d2b90"
              style=""
            >
              <div
                class="col md:w-4/12 lg:w-6/12"
                eid="daf279c7-cddf-4a4a-991d-c7b709485255"
                style=""
              >
                <img
                  class="mx-auto"
                  src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/9754dcc5-66dd-42eb-80f6-fae2b196ec4e.png"
                  alt="phone features"
                  eid="bbc7497f-6f90-4bbc-8141-b4abf25247fe"
                  style="
                    filter: drop-shadow(
                      rgba(0, 0, 0, 0.075) 0.5rem 0.5rem 0.25rem
                    );
                  "
                />
              </div>
              <div
                class="col md:w-8/12 lg:w-5/12 mt-6 md:mt-0 pl-12 lg:pl-0"
                eid="81384649-460c-41ca-ae1e-a1cd41dae67e"
                style=""
              >
                <h3
                  class="h2 letter-spacing-xs mt-4 font-black mb-3"
                  eid="a26b5816-df39-4cf5-b5e9-8b736c389aee"
                >
                  1. Easy first step
                </h3>
                <p
                  class="opacity-80 leading-6 h5"
                  eid="52da4302-22ce-436e-8a19-bf1554058128"
                >
                  Briefly explain what the user needs to do to get started. Maybe
                  add a
                  <a
                    href="javascript:void(0);"
                    eid="4bef8095-24af-4f79-bba4-a71fedbe2fe3"
                    >link</a
                  >?
                </p>
                <h3
                  class="h2 letter-spacing-xs mt-12 font-black mb-3"
                  eid="608e26a1-3b83-47ea-b1ba-c3e8286f86d7"
                  style=""
                >
                  2. Fun second step
                </h3>
                <p
                  class="opacity-80 leading-6 h5"
                  eid="5b62e0dc-7a79-44f7-8275-af69ce91ad65"
                >
                  Now that the user has gotten started, what else can they do?
                </p>
                <h3
                  class="h2 letter-spacing-xs mt-12 font-black mb-3"
                  eid="bdb6c0b0-9158-4264-ad34-ec8705a43657"
                  style=""
                >
                  3. Enjoy
                </h3>
                <p
                  class="opacity-80 leading-6 h5"
                  eid="04176e40-bca5-40f0-8c45-6b6b65f8ae08"
                  style=""
                >
                  How will you user benefit from your product now that its setup.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <style>
        .font-black {
          font-weight: 900;
        }
        @media (min-width: 1024px) {
          .display-5 {
            font-size: 3rem;
          }
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
      content:
        '<input type="checkbox" value="example" name="Checkbox" checked/>',
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
  ];
}
