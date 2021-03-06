import * as React from "react";
import "./contact.css";
import $ from "jquery";
$(document).on("click", ".send_form", function () {
  var input_blanter = document.getElementById("wa_email");

  /* Whatsapp Settings */
  var walink = "https://web.whatsapp.com/send",
    phone = "5491154146740",
    walink2 = "Hola! mi nombre es ",
    text_yes = "Muchas gracias!",
    text_no = "Por favor verificar los datos.";

  /* Smartphone Support */
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    var walink = "whatsapp://send";
  }

  if ("" != input_blanter.value) {
    /* Call Input Form */
    var input_select1 = $("#wa_select :selected").text(),
      input_name1 = $("#wa_name").val(),
      input_email1 = $("#wa_email").val(),
      input_number1 = $("#wa_number").val(),
      input_url1 = $("#wa_url").val(),
      input_textarea1 = $("#wa_textarea").val();

    /* Final Whatsapp URL */
var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + input_name1 +', me comunico para comentarles lo siguiente:'+'%0A'+ input_textarea1+'%0A'+'Les dejo mi mail!:'+input_email1;

    /* Whatsapp Window Open */
    window.open(blanter_whatsapp, "_blank");
    document.getElementById("text-info").innerHTML =
      '<span class="yes">' + text_yes + "</span>";
  } else {
    document.getElementById("text-info").innerHTML =
      '<span class="no">' + text_no + "</span>";
  }
});
export default function Contact() {
  return (
    <div>
       <h1 style={{display:"flex",justifyContent:"center",textAlign:"center"}}>Contactanos por Whatsapp!</h1>
      <form className="whatsapp-form">
        <div className="datainput">
          <input
            className="validate"
            id="wa_name"
            name="name"
            required=""
            type="text"
            defaultValue=''
          />
          <span className="highlight" />
          <span className="bar" />
          <label>Nombre</label>
        </div>
        <div className="datainput">
          <input
            className="validate"
            id="wa_email"
            name="email"
            required=""
            type="email"
            defaultValue=''
          />
          <span className="highlight" />
          <span className="bar" />
          <label>Email</label>
        </div>
        <div className="datainput">
          <textarea
            id="wa_textarea"
            placeholder
            maxLength={5000}
            row={1}
            required
            defaultValue={""}
          />
          <span className="highlight" />
          <span className="bar" />
          <label>Comentarios</label>
        </div>
        <a
          className="send_form"
          href="javascript:void"
          type="submit"
          title="Send to Whatsapp"
        >
          Send to Whatsapp
        </a>
        <div id="text-info" />
        <div className="divContact">
    <span className="fa fa-whatsapp"></span>+54 9 11 5414-6740
    <span className="fa fa-instagram"></span>@sapori.intensi
  </div>
      </form>
    </div>
  );
}
