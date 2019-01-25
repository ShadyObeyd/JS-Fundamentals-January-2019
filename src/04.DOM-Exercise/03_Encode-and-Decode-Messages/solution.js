function solve() {
	let buttons = document.getElementsByTagName('button');

	let encodeButton = buttons[0];
	let decodeButton = buttons[1];

	encodeButton.addEventListener('click', encode);
	decodeButton.addEventListener('click', decode);

	function encode() {
        let textToEncode = document.getElementsByTagName('textarea')[0].value;

        let newText = '';

        for(let char of textToEncode){
            let charCode = char.charCodeAt(0) + 1;

            newText += String.fromCharCode(charCode);
        }

        document.getElementsByTagName('textarea')[1].value = newText;
        document.getElementsByTagName('textarea')[0].value = '';
    }

	function decode() {
        let textToDecode = document.getElementsByTagName('textarea')[1].value;

        let originalMessage = '';

        for(let char of textToDecode){
            let charCode = char.charCodeAt(0) - 1;

            originalMessage += String.fromCharCode(charCode);
        }

        document.getElementsByTagName('textarea')[1].value = originalMessage;
    }
}