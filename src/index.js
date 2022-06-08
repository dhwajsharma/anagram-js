import "./styles.css";

const char = 256;

const anagram = (str1, str2) => {
  const charArr = new Array(char).fill(0);
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    charArr[str1.charCodeAt(i)]++;
    charArr[str1.charCodeAt(i)]--;
  }

  for (let i = 0; i < char; i++) {
    if (charArr[i] !== 0) return false;
  }
  return true;
};

console.log(anagram("abcde", "dcba"));
