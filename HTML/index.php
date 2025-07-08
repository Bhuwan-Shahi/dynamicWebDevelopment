<?php
// Class and Objects in PHP
class College {
    var $id;
    var $name;
    var $email;
    var $address;

    public function setData($id, $n, $email, $address) {
        $this->id = $id;
        $this->name = $n;
        $this->email = $email;
        $this->address = $address;
    }

    public function getData() {
        return $this->id . " , " . $this->name . "\n";
    } 
}

$pic = new College();
$pic->setData("3", "Padmashree", "pic@gmail.com", "Tinkune, Kathmandu");

echo $pic->getData();

?>
