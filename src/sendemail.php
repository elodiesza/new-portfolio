<?php
// Replace with your actual SendGrid API key
$sendgrid_api_key = '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';

$fromEmail = "elodie.sza@gmail.com"; 
$toEmail = "elodie.sza@gmail.com";
$subject = "Elodiesza contact email";
$content = "Email sent from my website.";

$url = 'https://api.sendgrid.com/';
$request =  [
  'personalizations' => [
    [
      'to' => [
        ['email' => $toEmail]
      ],
      'subject' => $subject
    ]
  ],
  'from' => ['email' => $fromEmail],
  'content' => [
    ['type' => 'text/plain', 'value' => $content]
  ]
];
$request_body = json_encode($request);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url . "v3/mail/send");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $request_body);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Authorization: Bearer ' . $sendgrid_api_key,
    'Content-Type: application/json'
));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>