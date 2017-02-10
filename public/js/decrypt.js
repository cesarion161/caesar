var alphabet = "abcdefghijklmnopqrstuvwxyz";
var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var encrypted = "vrph vklw khuh wr hqfubsw, dqg qrrqh zloo hyhu ghfubsw wklv kd kd"
var statistics = {};
var trueStatistics = {
	a:
}
for(var i = 0; i < encrypted.length; i++) {
	var prop = statistics[encrypted[i]];
	if (prop) {
		prop++;
	}
	else 
		prop = 1;
}