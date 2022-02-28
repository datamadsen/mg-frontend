
function hashCode(str){
	// https://stackoverflow.com/q/7616461
	var hash = 0;
	if (str.length === 0)
    return hash;
	for (var i = 0; i < str.length; i++) {
		var char = str.charCodeAt(i);
		hash = ((hash<<5)-hash)+char;
		hash = hash & hash;
	}
	return hash;
}

export default hashCode;
