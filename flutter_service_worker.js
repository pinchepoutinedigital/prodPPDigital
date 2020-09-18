'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "1f83bc8b71e7f00c12ca54f9bbaa5b23",
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
"index.html": "092e14e484ffab607a9648e956ed6b48",
"/": "a6cf292e8c149449eefedc11df22303d",
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
"web/index.html": "fcefc81b6ec0c76c96b9340f13302b26",
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
".dart_tool/package_config.json": "377f0a8ac9e21a800032cb521827ac7a",
".dart_tool/flutter_build/9345dd1187785a6e8440cb387a8a85f0/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/9345dd1187785a6e8440cb387a8a85f0/main.dart": "accb6bff8f59bc4bb20f806a5da2bad7",
".dart_tool/flutter_build/9345dd1187785a6e8440cb387a8a85f0/web_entrypoint.stamp": "9a2360a639afb56ba387a556c41871b7",
".dart_tool/flutter_build/9345dd1187785a6e8440cb387a8a85f0/app.dill": "afe5d17cbcf5e52d942697c017de8d52",
".dart_tool/flutter_build/9345dd1187785a6e8440cb387a8a85f0/app.dill.deps": "fcd45b21c52b0bec5a6523d72705b660",
".dart_tool/flutter_build/9345dd1187785a6e8440cb387a8a85f0/main.dart.js": "2b155fd7f684c70d4dd2b8dace7a9885",
".dart_tool/flutter_build/9345dd1187785a6e8440cb387a8a85f0/main.dart.js.deps": "a98aaf2771fb181c379170f129e13bc9",
".dart_tool/flutter_build/9345dd1187785a6e8440cb387a8a85f0/dart2js.d": "a8887a090abdd2d5251e10487417e434",
".dart_tool/flutter_build/9345dd1187785a6e8440cb387a8a85f0/dart2js.stamp": "b1225d1da9042fa5eb5c64e443033212",
".dart_tool/flutter_build/9345dd1187785a6e8440cb387a8a85f0/flutter_assets.d": "169cf49bcc8f19325122170ca730dcc2",
".dart_tool/flutter_build/9345dd1187785a6e8440cb387a8a85f0/web_resources.d": "57ea535e1970487b433efa9e62eb84e8",
".dart_tool/flutter_build/9345dd1187785a6e8440cb387a8a85f0/web_release_bundle.stamp": "194e384d596cf92ffa0dab4614fafec1",
".dart_tool/flutter_build/9345dd1187785a6e8440cb387a8a85f0/service_worker.d": "04debd094750d891668bcf07708bed7c",
".dart_tool/flutter_build/9345dd1187785a6e8440cb387a8a85f0/web_service_worker.stamp": "8853ed5e4644d0ee225277ec0e109a44",
".dart_tool/flutter_build/9345dd1187785a6e8440cb387a8a85f0/outputs.json": "fa1c507d600781379b463d255914bd42",
"build/web/main.dart.js": "2b155fd7f684c70d4dd2b8dace7a9885",
"build/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"build/web/assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"build/web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"build/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/web/assets/NOTICES": "8864b54fecade90d24a97e921418d1e3",
"build/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"build/web/manifest.json": "1f566b509698542d126fbd8f162102f7",
"build/web/index.html": "a6cf292e8c149449eefedc11df22303d"
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
