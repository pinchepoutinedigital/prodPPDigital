'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "295baa7f5bb7abddd2a92d862b597432",
"assets/images/logo.png": "837c4288713dbe56af119bf799ccedee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/AssetManifest.json": "4c90a67f8169bac3a7fa280dcb3a60c5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "2c6e6444053383055ba91cb0dc519013",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "f8a678bb6848a54788ad28ee7047c508",
"index.html": "1dc053acaecd7b95cad042912a8e9f6d",
"/": "329e10e2b7c45bbfbe577ed342cddd0c",
".idea/libraries/Dart_SDK.xml": "1a8e76f03d9ec07f8966e0caaeb2fe79",
".idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
".idea/modules.xml": "6e562bd2e74aaa79b0f10c5b25fab769",
".idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
".idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
"README.md": "819ac07eefd10498065880dd0d4e318e",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "43434a410f350a43526ada5ffea4d5ae",
"android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "a56f9b4603376084d13b45fe5efc13c5",
"android/app/src/main/AndroidManifest.xml": "9aa772b0288027651562211dcc8c5209",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "52533b7c97ea341b8c6a13aba97f53e6",
"android/app/src/debug/AndroidManifest.xml": "3550dc2715aa6b5f0f0bb04b30a11063",
"android/app/src/profile/AndroidManifest.xml": "3550dc2715aa6b5f0f0bb04b30a11063",
"android/app/build.gradle": "205e684a3b655f9d3e5383cfe0bf9529",
"android/build.gradle": "39daad7a2e484e36ad6fd5fab5eb8f5c",
"android/web_android.iml": "e631be658ada5ed327bf47f851a6ed5b",
"android/gradle/wrapper/gradle-wrapper.properties": "af83964f6eae29ab2498f55827d9f6ef",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/settings.gradle": "10881f279cc48040996c7354515e0da7",
"android/gradle.properties": "4a756df24e4431aa00ea27ee9b863c97",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/local.properties": "af3829e46a88207e682c75fa3674cf04",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "74fd196a515b5a746527f7b275f8785b",
"ios/Runner.xcodeproj/project.pbxproj": "f14e0243c0b9d538c168aa6341bc75d0",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/Runner/AppDelegate.swift": "640effd31ad5be56ac222976d95a5878",
"ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "e2b9a9fb66c6f8165a179d370eb723c0",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "128e30cc061e49f503f48c338a21380e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "9595f5692fac4a15b50616d6549e9ed4",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "2adf6396c0f80a2ddc96ead2f2405220",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "f8e7955550407d4ec71d28e7c2d8c8c6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "a34a631e106b9e7251e55fa199d34bca",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7af6f2ed506e771a319d46846dde1f26",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "975d8a8c44f5d28ac65263294b84b0c5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "c0fa6a088a2d486e4d75a012096d611b",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "d86de75e9341c42432a12b3d58e364b8",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"ios/Runner/Info.plist": "ed046f74abf3f49ccb6cd7498b037b6c",
"ios/Runner/GeneratedPluginRegistrant.h": "51e4cefb306d339b47a67bb0477a1d27",
"ios/Runner/GeneratedPluginRegistrant.m": "7c20af7f75e9fa38e8686b147b13159a",
"ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Flutter/AppFrameworkInfo.plist": "1a51e9e513bcfeb24ecfb6ab3346d1f2",
"ios/Flutter/Generated.xcconfig": "1a240d628232113954286a6a563abf55",
"ios/Flutter/flutter_export_environment.sh": "94040b86989d65052d705d3d60b6bfd2",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"lib/main.dart": "fd7cc9c62ac0ed61b813f607d2368e49",
"web.iml": "0e10d326c956d57be354882dfdf4d740",
"test/widget_test.dart": "6b2218306343168469bea21c0f53457c",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/manifest.json": "1f566b509698542d126fbd8f162102f7",
"web/index.html": "5df9a91ad86f43592cf101e28335404e",
"linux/flutter/CMakeLists.txt": "82ef8c2a1a0fa55e81ec0d1cc4050549",
"linux/flutter/generated_plugin_registrant.h": "4ec7a3cd444897f31018f3278c3316ab",
"linux/flutter/generated_plugin_registrant.cc": "c553c7eb862401e21e8ec4721f25d0d4",
"linux/flutter/generated_plugins.cmake": "d88445114c38cfd456f169885b9d3ddb",
"linux/my_application.h": "7bd839b67ebee22174be9f4da4521b6f",
"linux/main.cc": "f59b13428b8c96cde068c912a702798c",
"linux/CMakeLists.txt": "418df1830f264d14bd9b26cbabc780e4",
"linux/my_application.cc": "c9960bc7357b0f4baca8a6aa4b7504a2",
"pubspec.yaml": "d4fb9467c1b9e4ff21e4b2c6089b3764",
"pubspec.lock": "206599955d242b966fabe98a532fe8a1",
".dart_tool/package_config.json": "b0f9ce418914dcfbdc73f8248a2daa8f",
".dart_tool/flutter_build/345a118f45f72c13c6ef5692c75dddfb/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/345a118f45f72c13c6ef5692c75dddfb/main.dart": "accb6bff8f59bc4bb20f806a5da2bad7",
".dart_tool/flutter_build/345a118f45f72c13c6ef5692c75dddfb/web_entrypoint.stamp": "8f62ee47a2066fc8133ef7ebd22a83fe",
".dart_tool/flutter_build/345a118f45f72c13c6ef5692c75dddfb/app.dill": "816bfa0eb9f84db5efd59c1ebf7788cf",
".dart_tool/flutter_build/345a118f45f72c13c6ef5692c75dddfb/app.dill.deps": "e1e177232e4caebef40bc711b7cf5b1b",
".dart_tool/flutter_build/345a118f45f72c13c6ef5692c75dddfb/main.dart.js": "537e255d26e10b6709a8a9cb28e5474f",
".dart_tool/flutter_build/345a118f45f72c13c6ef5692c75dddfb/main.dart.js.deps": "99f80a8678a0ad0b9e316e5697d14822",
".dart_tool/flutter_build/345a118f45f72c13c6ef5692c75dddfb/dart2js.d": "5b54c050e05edab6ad86fad6985422c4",
".dart_tool/flutter_build/345a118f45f72c13c6ef5692c75dddfb/dart2js.stamp": "7f4f1512fa4e2b9cbc03f34a26616959",
".dart_tool/flutter_build/345a118f45f72c13c6ef5692c75dddfb/flutter_assets.d": "169cf49bcc8f19325122170ca730dcc2",
".dart_tool/flutter_build/345a118f45f72c13c6ef5692c75dddfb/web_resources.d": "57ea535e1970487b433efa9e62eb84e8",
".dart_tool/flutter_build/345a118f45f72c13c6ef5692c75dddfb/web_release_bundle.stamp": "f4ffa1782cd548b37f3b25d3c68d7f77",
".dart_tool/flutter_build/345a118f45f72c13c6ef5692c75dddfb/service_worker.d": "55fb5c8d3d9a2a330e5bd7dd49365add",
".dart_tool/flutter_build/345a118f45f72c13c6ef5692c75dddfb/web_service_worker.stamp": "b258264712c0fcf7c32ec84c4c8667fa",
".dart_tool/flutter_build/345a118f45f72c13c6ef5692c75dddfb/outputs.json": "fa1c507d600781379b463d255914bd42",
"build/web/main.dart.js": "537e255d26e10b6709a8a9cb28e5474f",
"build/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"build/web/assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"build/web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"build/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/web/assets/NOTICES": "8864b54fecade90d24a97e921418d1e3",
"build/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"build/web/manifest.json": "1f566b509698542d126fbd8f162102f7",
"build/web/index.html": "329e10e2b7c45bbfbe577ed342cddd0c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/master": "9f0791e011377542fa856647724dcee2",
".git/refs/remotes/origin/master": "9f0791e011377542fa856647724dcee2",
".git/objects/9d/532b18a01fe4462df8fb637bb52d8dca822aa8": "a418e4604e550ba82efdd573a4f77882",
".git/objects/9d/bce4864cbffdf396045b6ef7972418d99f3578": "4d0229977652f0b42ddea960517a888f",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/2f/c0ec0b749a87d51076db6b50d46c78c4ff7819": "f9285b603d912ba55d464e867fd47ff7",
".git/objects/e3/4dce9afe4bfb86b96cb579519435256f63b4bf": "45b0900402f9a4ace01ab818b613b0b0",
".git/objects/0a/741cb43d66c6790a2a913fa24c8878fb1ab7b5": "307011b7f3f57c355deba17946cc9f69",
".git/objects/fc/4b9163ac5338fcf09aa2b3d64ad0b8f31ccb0a": "5375308fcb3df7b0be1b45457b1b5c17",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/a3/95d54a1e76d281e32054705f8e28962dcd608d": "ad303ddeafccc684008058c4ce7793d7",
".git/objects/3d/b42279a76ed3831e3ef016725c75466b18df02": "eae51bd99ceaf4b63163cf688fedddf5",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/64/35c65440662b7a656ef98832aacb5b0b6f93e3": "3658f753542e4521f133cdca225e59c4",
".git/objects/64/23d0a1754313c50ab39e2ddaa8f3d74892134b": "dec1800386794d7c316af2e4a78e0d27",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/1f/83a33fd4f2c45c5ffa5b6c1b729c431fd445fc": "0738e3d4ae36142fab410ded3b12b22a",
".git/objects/1f/539bf5b09d896dae2d6dbf838bcf9eb95b8ac8": "723fe40696854fe3a4c2fa50b412605a",
".git/objects/31/00ad2d55532e58ed44b53dd3c2a04c5bcaf160": "378dddef8741925bc9b88f77775bd0c1",
".git/objects/94/adc3a3f97aa8ae37ba567d080f94f95ee8f9b7": "daee15d8fbbf348420b6eaf3d86cbf40",
".git/objects/29/6b146b7318dd58663296dbb7555df9ff328ec2": "cd7bfa51bd49d68b3d805ceb7199e1a5",
".git/objects/29/cfdc84400ab8a7898075be2b8959fc1ce1326d": "f1c14b66e999957d08283625cea91d34",
".git/objects/44/e62bcf06ae649ea809590f8a861059886502e8": "2e42f843c31c0484de7ce7a7c79cd856",
".git/objects/44/7f15f343e095c5b61333a01344371431fa7d26": "aa41b8123a30b229e762db79ad54884b",
".git/objects/65/5d1cef3bd6202d6ada7f85505eb52be6112753": "80c5a27d9fe9b3e16ec4b09ae8cc42fd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/6e/16e4fdbe7415ef4b79a166685283fba141e5aa": "e3f9eabf89cd2e16045c76b5310e6368",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/8a/1884b50a149b3881560e6ec796442a12aaebb6": "4b797e861c20b4f8518d600c5d5a0b5a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/550795fded726ca139bae4ab9767cc3b51d0fe": "ec307b4b9bfc1af70175c6ae0211b1d2",
".git/objects/8a/f00c13bb85fdfdef6fd62c93f2843007f8bd96": "a59b9fa9ef83cb8e56b94ac1dc0b4158",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/bc/d4a57d28e727112eb244673311c32c4e8ca092": "5d654c45a4aecfaaa163d4ab4c91dca2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/8f6f68d4a86aeca91efc960e6d1f227c7c364a": "db520775f3e71e34bfe5270f915a8aca",
".git/objects/e9/6ef602b8d172f7cd28ba656aac097f741c736d": "c3323f418dab0a55952c00cd3adbeb55",
".git/objects/f2/872cf474eee0cc0439d4012e1a653ac08e9d0f": "9e2bb6f316f928432cb49cb96ffa40a9",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/78/62b5a9063a079783348207c58f190c962da442": "a5ca74c745ced841a8156442b2ac442d",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/objects/a2/8140cfdb3ff9b7a11a9497b84546d615db2afa": "6d7635289ce43450f1e676e1c5444b06",
".git/objects/70/693e4a8c128fc4350b157416374ca599ac8c7b": "6942d9ddf2906a8e847e7ef6889a4221",
".git/objects/70/4ff84b2d6af5f32e3a60ed730232d414f42826": "bd85e7d212939e969300fc017ebe35e7",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d3/896c98444fbe7288d434169a28c532258a4466": "65bd2275cf87203cd8cbaa19e4cce2fc",
".git/objects/d3/8195aa0412ab73a9e2752ffbb00262f4e4be31": "cb752f0bc47821835e91967f827f6130",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/dc/dc2306c28505ebc0b6c3a359c4d252bf626b9f": "e712bf13b0d526e57c6ee1c8acc412d4",
".git/objects/28/c6bf03016f6c994b70f38d1b7346e5831b531f": "859e347621927457ff896dba865a18fd",
".git/objects/2c/cbfd967d9697cd4b83225558af2911e9571c9b": "79f574379587d27e91d5ebf05ea6e777",
".git/objects/2c/2b6f899fe29f68d49bc4626001c88b3e30eeeb": "b6168181717ec63c1eb97c0d409d9bb0",
".git/objects/2c/48eeb5b183ea38e4506a8d58a806e90ae2ea30": "0f64c2b98849f7a875c9841431dab567",
".git/objects/f0/91b6b0bca859a3f474b03065bef75ba58a9e4c": "1aef8d0dea7cfdb7ffb51559c81d2fdf",
".git/objects/4c/de12118dda48d71e01fcb589a74d069c5d7cb5": "28e8a446706511f1a67da714824896ea",
".git/objects/4c/1fee0e3e1115fff520e46121e20699d805d5bf": "8f8e6f538595fc761f5ad05a313e5421",
".git/objects/d0/ef06e7edb86cdfe0d15b4b0d98334a86163658": "4d865184682ad08c3405e3934cd91fa9",
".git/objects/d0/e1f58536026aebc4f1f70e481f6993c9ff088d": "18109e32e7fc3bf04e529c14b8723746",
".git/objects/c8/f9ed8f5cee1c98386d13b17e89f719e83555b2": "0fc2e076b543f37f90a9e7159555320c",
".git/objects/c8/a82f5e58b30cd10d1028387baa09c0923773fa": "d0802b88d46680ea5908515ce067d737",
".git/objects/a6/d6b8609df07bf62e5100a53a01510388bd2b22": "821831c6c42de47994c16f6a1db3ea7e",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/75/b2d164a5a98e212cca15ea7bf2ab5de5108680": "d453ef5dc75a6b2e158c081f7a51acac",
".git/objects/75/2776ac9eebe8e6e90c1cd4891479cd51fc14a0": "62049a05fc0020ada9d07d6dfa1c320b",
".git/objects/c4/df70d39da7941ef3f6dcb7f06a192d8dcb308d": "d394f8200d968d57839b22cbe657146e",
".git/objects/6a/84f41e14e27f4b11f16f9ee39279ac98f8d5ac": "a913aaf750cc736879f14f53488f5c42",
".git/objects/6a/c151e4fea1b5b946a51f958c067e33f144c976": "a871851ef0cbb8ecd4e45a90042ef2b5",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/0b/aff2176fe2a6723ff4f534b8ab78af0d3913a1": "9d84595c96f62c21cda718f87fa4df52",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/a7/7f2965348a5ae843b29a073171f2bec78be079": "c28dd2d2140ee9bf5aac6577d4b164de",
".git/objects/11/655b668ba1bae286b1fd31f1234cdec0b46d36": "7a1c7fd9205fb502f6bf42fbf3218a86",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/55/4769819af797e9d4b07c9004505a8ef9fb10ce": "2a98acbe4b1616988d8c3f77402234d0",
".git/objects/4f/48a7ced5f4fffaaa9e54a8e54610c0a5cd2870": "7b666ac14db5f1e3acc64f3e3cb32b3e",
".git/objects/9b/f7478940c1fa50b28c35bc3ffdf9b0ce4f2ab0": "07394f3b1a5487d7dbf39c3791939500",
".git/objects/51/436ae8c982a8ac6f754dacd87bca3893a93fe7": "a3ea7fec6853745518b95592f2d465ec",
".git/objects/05/8e6178fe8cc280be45e34bcce4d222718f114b": "6a5315537631b633cbe4ad1ab36633b0",
".git/objects/b9/fd8471c884b191b43cb57ba9fc2b1802d2fcea": "94ce77b06721b8398e7a7c6f487bd463",
".git/objects/72/271d5e41701cfbffad74d38640bf9cc7c1f7be": "e07153a480d4e159b70f80851f6a553d",
".git/objects/04/1a58c42ebd8a640a146904cd3d836c43327b62": "049fa49a9caceb3100e121eb929b08db",
".git/objects/07/962765d77c30e1d58bce12307b6b9537fdb6ce": "0ab7e2a567bf93775c0639000c0ea746",
".git/objects/9e/f67711011adc29f5e6ca9e0c2e80448aad70d2": "65b1a0feaa709479713a156e0987a31f",
".git/objects/01/6512c716091729c0672d7b7ff9fdc674a5956c": "a69277bcf7db1359d10e1c9956874717",
".git/objects/33/3e14bf05b23b135fc81bc2616dcdd1d6c9bd8c": "f2d185ca32afaa0453b9aa45eecb0bef",
".git/objects/57/9b8dcc92e99c0fc7306a00e28827fb5097fdea": "240bb2a6d3d6ca06fa2797f00d99c216",
".git/objects/6f/caf409794df3e7f9e992677891740abe1498fc": "cec360896a0cda2de778b0ec01915108",
".git/objects/86/4a0d28df8a409f465690e62aa8ff814494248b": "fd309b67973388ea21187784c9f35afe",
".git/objects/99/0df0549bcc76bb9d8f0de9e066d337de97d0ce": "e438e0b890a99652d59df6f5178998e8",
".git/objects/99/a91071b7cf7b464b29c62dbc9de5038eb9910d": "5fb2e1302234419e639077452af8fd88",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/4b/88d8b26a3ca0df2853b9095ab8e3961968dd33": "7a3980cdf8c2124079cc6a67356579dc",
".git/objects/37/18129a50eae6a1e980e114305250db7e40f9cd": "e3284c7b7840bf17f36a940cd78e3544",
".git/objects/38/b8812b9ca8ed87c4b42085b970dccf3325f365": "bb5a88fea865cda239fac6d5de8b4435",
".git/objects/38/96c6a1bee192871db75bad23c232527b20717f": "f08c2cc1b29b9450d98f09cfc98c20d5",
".git/objects/c0/6652c715657321ca829d5bd566891c5c9a997e": "46dffcfc7b5e71d9f5242bf456b1dfd7",
".git/objects/08/c3d0e3eeeb30009f71bf752a07c06bb38958aa": "51fe64fed867ecc34e45ef3c9c1e817a",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/49/908aa8d1d0417c7af0b535baa04e9d45e16e4e": "f22f8d297d26f6459adcca36fd6447e5",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/03/4cafc7f2d8224f6d898bd58e04fdd23bb56ec8": "e3cd97d2703f972d2d57def804738efe",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
".git/objects/a5/092d862dc24ca0b8c50ce7c855f6f61a3ab121": "4fd870496f7c85c5dd93bef110606ed3",
".git/objects/24/7f5694ce6ce339f35bb58a657960ba9b26a6bc": "26ea2621da751d7b92d3f1984d54851b",
".git/objects/45/303f9958e638faf87374486d0e96b89023351d": "7aaa290d8b5e7f86e33d4bffbaf2bf32",
".git/objects/68/70e59ab9cb2b85f8529fd79b44aa378de30420": "3ccc0635ab8cc0a1ab48e37269dcf34a",
".git/objects/84/d08f7b151f10507b1d8c24043ab1d088f4c0aa": "a6fbdf88da12c6ac558a3a6de7fc2c33",
".git/objects/80/dd6848309958801f535eb1fdd3069e37929959": "273e930701b67a4e962d9880203f0801",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
".git/objects/6c/bda8abe74655ac6f9c1b85a7c01498266d3596": "be97cf3e3c417c7adc3a15ef1d3c3a29",
".git/objects/ac/5ecfc2f72913b46efd375786136f3b56cd9d4a": "84cca2d006bbfc800be823e44a808015",
".git/objects/ac/a1aa75f4bec009f234292d557ef83a2e0c36ed": "3bbacaa5ec566b4152a299bc2f09412b",
".git/objects/ac/6a4c12f7b201450b8494f1eeeac13b2346359b": "6a193c3818b2574bcf3e2dec602184c6",
".git/objects/87/b77fd6316b50aade5aff4b3eaecc3ceb140e9b": "d486574d9a6f757c7d12a4c221ca427a",
".git/objects/12/07907107a69225128cf802edc5ea23f2e3bcda": "f4f5682dae647d62bd2dca62ce7823a9",
".git/objects/12/4766a453a2521f5ba70410bf5b40f88a073431": "5192658d2f19c65e1d804f7c87223186",
".git/objects/97/aecf25e448be24a092d975d51040fc40bfb6da": "0e6e3f69ad9956d5f24be2226ae2fb8a",
".git/objects/af/344d721fc50308747e2e21a5b31db90ed2ea50": "44a0b1a70b646bf0ff8c545045367399",
".git/objects/58/5bf0905a407f2a96822ca440aa54dfc93c8fd5": "7b8125013f8c54d47985724776e66070",
".git/objects/be/f51e15c308f20b3897de0d8799b0a9a7c97de6": "371d6a081bb5e40abd5a6743ca980540",
".git/objects/a0/869491ccc21bdfafde7945f5a0175ef19c1256": "ae0761f7d791044927ef425758ed080c",
".git/index": "195b47ea781c9e0eae73d16656c5d1a8",
".git/COMMIT_EDITMSG": "646158c0ea7e52196463cd286747323b",
".git/logs/HEAD": "e50bdcd3065b21a3ea576d7ab992c0d7",
".git/logs/refs/heads/master": "d00c766760ec4ba925cc3cfc707eef99",
".git/logs/refs/remotes/origin/master": "80b61230d2b28e44c2dc9f564889c76a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/FETCH_HEAD": "2f795837f58e3db0f14ee25c0c2bbe40",
".git/ORIG_HEAD": "9f0791e011377542fa856647724dcee2",
".git/config": "d5d99313f000bf371556b68bb0aa1a77"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
