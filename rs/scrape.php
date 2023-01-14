<?php
require __DIR__ . '/vendor/autoload.php';

$username_rbx = $_GET["username"];

$info_rbx = 'https://api.roblox.com/users/get-by-username?username=';
$resource = curl_init($info_rbx . $username_rbx);
curl_setopt($resource, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($resource);
$id = (json_decode($result)->Id);
$profil_url = 'https://www.roblox.com/users/'. $id .'/profile';

$client = new \Goutte\Client();

$crawler = $client->request('GET', $profil_url);

$IMG_v = $crawler->evaluate('//meta[@name="twitter:image1"]/@content');
$FOLLOWERS_v = $crawler->evaluate('//div[@data-followerscount]/@data-followerscount');
$FOLLOWING_v = $crawler->evaluate('//div[@data-followingscount]/@data-followingscount');
$FRIENDS_v = $crawler->evaluate('//div[@data-friendscount]/@data-friendscount');

foreach ($IMG_v as $link) {
    $IMG = $link->textContent.PHP_EOL;
}
foreach ($FOLLOWING_v as $link) {
    $FOLLOWING = $link->textContent.PHP_EOL;
}
foreach ($FRIENDS_v as $link) {
    $FRIENDS = $link->textContent.PHP_EOL;
}
foreach ($FOLLOWERS_v as $link) {
    $FOLLOWERS = $link->textContent.PHP_EOL;
}



$tbl_values = [
    'username'  => $username_rbx,
    'wearing'   => str_replace(array("\n", "\r"), '', $IMG),
    'status'    => '',
    'joindate'  => '',
    'id'        => $id,
    'friends'   => strval(intval($FRIENDS)),
    'followings' => strval(intval($FOLLOWING)),
    'followers' => strval(intval($FOLLOWERS)),
    'avatar'    => ''
];


echo json_encode($tbl_values, JSON_UNESCAPED_SLASHES); exit;