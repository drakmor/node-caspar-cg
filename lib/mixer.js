"use strict";

module.exports = function (ccg) {

	ccg.prototype.mixerFill = function (channel, grid, duration, transition, cb) {
		var self = this;

		if (typeof(channel) == "number") {
			channel = channel.toString();
		}

		if (typeof(channel) != "string" || !/[0-9]+-[0-9]+/.test(channel)) {
			self.log("Invalid channel");
			return cb && cb(new Error("Invalid channel"));
		}

		var cmd = "MIXER " + channel + " FILL ";

		cmd += (grid.x || "0") + " ";
		cmd += (grid.y || "0") + " ";
		cmd += (grid.w || "0") + " ";
		cmd += (grid.h || "0");

        cmd += duration + " ";
        cmd += transition + " ";

		self.sendCommand(cmd, cb);
	};

	ccg.prototype.mixerClip = function (channel, grid, duration, transition, cb) {
		var self = this;

		if (typeof(channel) == "number") {
			channel = channel.toString();
		}

		if (typeof(channel) != "string" || !/[0-9]+-[0-9]+/.test(channel)) {
			self.log("Invalid channel");
			return cb && cb(new Error("Invalid channel"));
		}

		var cmd = "MIXER " + channel + " CLIP ";

		cmd += (grid.x || "0") + " ";
		cmd += (grid.y || "0") + " ";
		cmd += (grid.w || "0") + " ";
		cmd += (grid.h || "0");

        cmd += duration + " ";
        cmd += transition + " ";

		self.sendCommand(cmd, cb);
	};

	ccg.prototype.mixerOpacity = function (channel, opacity, cb) {
		var self = this;

		if (typeof(channel) == "number") {
			channel = channel.toString();
		}

		if (typeof(channel) != "string" || !/[0-9]+-[0-9]+/.test(channel)) {
			self.log("Invalid channel");
			return cb && cb(new Error("Invalid channel"));
		}

		var cmd = "MIXER " + channel + " OPACITY ";

        cmd += opacity + " ";

		self.sendCommand(cmd, cb);
	};

	ccg.prototype.mixerVolume = function (channel, volume, cb) {
		var self = this;

		if (typeof(channel) == "number") {
			channel = channel.toString();
		}

		if (typeof(channel) != "string" || !/[0-9]+-[0-9]+/.test(channel)) {
			self.log("Invalid channel");
			return cb && cb(new Error("Invalid channel"));
		}

		var cmd = "MIXER " + channel + " VOLUME ";

        cmd += volume + " 25 easeinsine ";

		self.sendCommand(cmd, cb);
	};

};
