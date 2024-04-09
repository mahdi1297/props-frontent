import React, { Component } from "react";

import { Editor } from "@tinymce/tinymce-react";

export class CkEditor extends Component {
  render() {
    return (
      <div className="App">
        <Editor
          // apiKey="y7gnmtbsaxnjbgh3405ioqbdm24eit5f0ovek49w8yvq5r9q"
          initialValue=""
          apiKey="3wv8hhl1jpegh1y3grwv7dfx5j3bxkkyto7i3495r69e4s2b"
          init={{
            branding: false,
            height: 400,
            menubar: true,
            plugins:
              "print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern",
            toolbar:
              "formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat | styles",
            image_advtab: true,
          }}
        //   onChange={this.onChange}
        />
      </div>
    );
  }
}
