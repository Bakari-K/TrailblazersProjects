// Pin definitions for 7-segment display
#define segA 8
#define segB 7
#define segC 6
#define segD 5
#define segE 4
#define segF 3
#define segG 2

// Button and LEDs
#define buttonPin 19
#define greenLED 13
#define redLED 18

// DIP switch inputs
#define dipBit3 9
#define dipBit2 10
#define dipBit1 11
#define dipBit0 12



//7 display code
void baseten_to_seven_seg(int num) {
  //Turn everything off first
  digitalWrite(segA, LOW);
  digitalWrite(segB, LOW);
  digitalWrite(segC, LOW);
  digitalWrite(segD, LOW);
  digitalWrite(segE, LOW);
  digitalWrite(segF, LOW);
  digitalWrite(segG, LOW);

  if (num == 0){
    digitalWrite(segA, HIGH);
    digitalWrite(segB, HIGH);
    digitalWrite(segC, HIGH);
    digitalWrite(segD, HIGH);
    digitalWrite(segE, HIGH);
    digitalWrite(segF, HIGH);
    digitalWrite(segG, LOW);
  }

  else if (num == 1) {
    digitalWrite (segA, LOW);
    digitalWrite (segB, HIGH);
    digitalWrite (segC, HIGH);
    digitalWrite (segD, LOW);
    digitalWrite (segE, LOW);
    digitalWrite (segF, LOW);
    digitalWrite (segG, LOW);
  }
  else if (num == 2) {
    digitalWrite(segA, HIGH);
    digitalWrite(segB, HIGH);
    digitalWrite(segC, LOW);
    digitalWrite(segD, HIGH);
    digitalWrite(segE, HIGH);
    digitalWrite(segF, LOW);
    digitalWrite(segG, HIGH);
  }

  else if (num == 3) {
    digitalWrite(segA, HIGH);
    digitalWrite(segB, HIGH);
    digitalWrite(segC, HIGH);
    digitalWrite(segD, HIGH);
    digitalWrite(segE, LOW);
    digitalWrite(segF, LOW);
    digitalWrite(segG, HIGH);
  }

  else if (num == 4) {
    digitalWrite(segA, LOW);
    digitalWrite(segB, HIGH);
    digitalWrite(segC, HIGH);
    digitalWrite(segD, LOW);
    digitalWrite(segE, LOW);
    digitalWrite(segF, HIGH);
    digitalWrite(segG, HIGH);
  }

  else if (num == 5) {
    digitalWrite(segA, HIGH);
    digitalWrite(segB, LOW);
    digitalWrite(segC, HIGH);
    digitalWrite(segD, HIGH);
    digitalWrite(segE, LOW);
    digitalWrite(segF, HIGH);
    digitalWrite(segG, HIGH);
  }

  else if (num == 6) {
    digitalWrite(segA, HIGH);
    digitalWrite(segB, LOW);
    digitalWrite(segC, HIGH);
    digitalWrite(segD, HIGH);
    digitalWrite(segE, HIGH);
    digitalWrite(segF, HIGH);
    digitalWrite(segG, HIGH);
  }

  else if (num == 7) {
    digitalWrite(segA, HIGH);
    digitalWrite(segB, HIGH);
    digitalWrite(segC, HIGH);
    digitalWrite(segD, LOW);
    digitalWrite(segE, LOW);
    digitalWrite(segF, LOW);
    digitalWrite(segG, LOW);
  }

  else if (num == 8) {
    digitalWrite(segA, HIGH);
    digitalWrite(segB, HIGH);
    digitalWrite(segC, HIGH);
    digitalWrite(segD, HIGH);
    digitalWrite(segE, HIGH);
    digitalWrite(segF, HIGH);
    digitalWrite(segG, HIGH);
  }

  else if (num == 9) {
    digitalWrite(segA, HIGH);
    digitalWrite(segB, HIGH);
    digitalWrite(segC, HIGH);
    digitalWrite(segD, HIGH);
    digitalWrite(segE, LOW);
    digitalWrite(segF, HIGH);
    digitalWrite(segG, HIGH);
  }

  else {
    // Optional: turn off all segments for invalid input
    digitalWrite(segA, LOW);
    digitalWrite(segB, LOW);
    digitalWrite(segC, LOW);
    digitalWrite(segD, LOW);
    digitalWrite(segE, LOW);
    digitalWrite(segF, LOW);
    digitalWrite(segG, LOW);
  }
}


//read 4 bit function
int read_4_bit() {
  int b3 = digitalRead(dipBit3);
  int b2 = digitalRead(dipBit2);
  int b1 = digitalRead(dipBit1);
  int b0 = digitalRead(dipBit0);

  //DIP switches
  int value= (b3<<3) | (b2<<2) | (b1<<1) | b0;
  return value;
}



//main code
void setup() {
  pinMode(segA, OUTPUT);
  pinMode(segB, OUTPUT);
  pinMode(segC, OUTPUT);
  pinMode(segD, OUTPUT);
  pinMode(segE, OUTPUT);
  pinMode(segF, OUTPUT);
  pinMode(segG, OUTPUT);

  pinMode(buttonPin, INPUT_PULLUP);

  pinMode(greenLED, OUTPUT);
  pinMode(redLED, OUTPUT);

  pinMode(dipBit3, INPUT_PULLUP);
  pinMode(dipBit2, INPUT_PULLUP);
  pinMode(dipBit1, INPUT_PULLUP);
  pinMode(dipBit0, INPUT_PULLUP);

  randomSeed(analogRead(A0));
}

void loop() {
  static bool prevButton= HIGH;
  bool currButton= digitalRead(buttonPin);

  if(prevButton == HIGH && currButton == LOW)  {
    delay(50); //debounce
    if (digitalRead(buttonPin)== LOW) {
      int roll= random(0,10);       //random number 1-6
      baseten_to_seven_seg(roll);  //show it
      int dipValue = read_4_bit();  //read DIP switch


      // Compare and control LEDs
      if (dipValue == roll) {
        digitalWrite(greenLED, HIGH);
        digitalWrite(redLED, LOW);
      }

      if (dipValue != roll)  {
        digitalWrite(redLED, HIGH);
        digitalWrite(greenLED, LOW);
      }

      delay(250);
    }
  }

  prevButton = currButton;
}


