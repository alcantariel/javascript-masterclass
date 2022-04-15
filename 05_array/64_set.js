// Set - forEach

const charsets = new Set();
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("UTF-8");

charsets.forEach((charset) => {
  console.log(charset);
});

// ASCII
// ISO-8859-1
// UTF-8
