<?php
if (!empty($_POST)) {

        /* Form Data */
    $formDataLabels = ['name', "email", "message"];

    foreach($formDataLabels as $label){
        $formDatas[$label] = isset($_POST[$label]) ? filter_input(INPUT_POST, $label, FILTER_SANITIZE_SPECIAL_CHARS) : "";
    }

    $error = false;
    foreach($formDatas as $formData){
        if(empty($formData)){
            $error = true;
        }
    }

    if(!$error){
            /* Save Data With Email */
        $mailTo = "contact@pierreyvesflamand.com";
        $subject = "Contact Portofio de ".$formDatas['name'];
        $header = "From: ".$formDatas['email'];

        $txt = "Un nouveau formulaire de contact du portfolio a ete complete.\n\n";
        $txt .= "Email: ".$formDatas['email']."\n";
        $txt .= "Nom:   ".$formDatas['name']."\n";
        $txt .= "Message:\n";
        $txt .= $formDatas['message'];

        mail($mailTo, $subject, $txt, $header);

            /* Confirmation Email */
        $mailTo = $formDatas['email'];
        $subject = "Confirmation d'envoie de votre message";
        $header = "From: ".$formDatas['email'];

        $txt = "Un nouveau formulaire de contact du portfolio a ete complete.\n\n";
        $txt .= "Email: ".$formDatas['email']."\n";
        $txt .= "Nom:   ".$formDatas['name']."\n";
        $txt .= "Message:\n";
        $txt .= $formDatas['message'];

        mail($mailTo, $subject, $txt, $header);
    }

    header("Location: ./index.html?mail-envoye");
}
?>