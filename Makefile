
build:
	@npm run build:app

init:
	@cordova create app com.awesomeapp awesome; \
		cd app; \
		cordova platform add ios --save; \
		cordova platform add android --save; \
		cordova requirements

ios:
	@cd app; \
		cordova run ios

android:
	@cd app; \
		cordova run android

.PHONY: init build ios android
