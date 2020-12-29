<?php
if (!empty($_POST)) {
    // // Call the function post_captcha
    // $res = post_captcha($_POST['g-recaptcha-response']);

    // if ($res['success']) {
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
        }

        header("Location: ./index.html?success-mail-sent");
    // }
}

// function post_captcha($user_response) {
//     $fields_string = '';
//     $fields = array(
//         'secret' => '',
//         'response' => $user_response
//     );
//     foreach($fields as $key=>$value)
//     $fields_string .= $key . '=' . $value . '&';
//     $fields_string = rtrim($fields_string, '&');

//     $ch = curl_init();
//     curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
//     curl_setopt($ch, CURLOPT_POST, count($fields));
//     curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
//     curl_setopt($ch, CURLOPT_RETURNTRANSFER, True);

//     $result = curl_exec($ch);
//     curl_close($ch);

//     return json_decode($result, true);
// }
?>