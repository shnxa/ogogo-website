<?php

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = '2089897417:AAHQNojZKamLkK8pQtfnLEdX9_mk7jz9j8s';
$chat_id = '-735827342';
$arr = array(
    'Заявка с главной страницы(пробный урок)',
    'Имя' => $name,
    'Номер телефона' => $phone
);

foreach($arr as $key => $value){
    $txt .= "<b>".$key."</b>".value."%0A";
};

$sendToTelegram = fopen("http://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram){
    echo "success";
} else {
    echo "error";
}

?>
