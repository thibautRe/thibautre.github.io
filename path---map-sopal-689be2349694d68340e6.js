webpackJsonp([55657141467539],{500:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Thibaut's journal",author:"Thibaut REMY"}},markdownRemark:{id:"C:/Users/Thibaut/Documents/code/thibaut.re-2/src/pages/map-sopal/index.md absPath of file >>> MarkdownRemark",html:'<p>TL;DR: Building a map from scratch is fun</p>\n<p>The Map <em>Sopal</em> is a cartography of the underground tunnels of Paris, built as an interactive web-based map. It is available for a restricted number of people, since the information it contains is sensitive. In this Behind-the-scenes article, I will try to document my journey to build this map.</p>\n<h2>Getting the data</h2>\n<p>The first thing needed to build a map is the data of the galleries, rooms, sightseeings and other curiosities. The galleries running under Paris are quite tortuous and even though they mostly follow the ground-level streets, they are not nearly as straight. Some parts are narrow, some are quite wide. Some parts are flooded with water, some are completely dry. Some parts are 3m high, while you need to crawl in some others. These are some of the details that I wanted to reflect on the map.</p>\n<p>These galleries have been mapped in the XVIII, XIX and XX centuries, and even though some parts are outdated, it provides a really good ground to build from. This data is freely available from the town archives, and some people before me already scanned these paper maps and bundled them together, which made the process much easier.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/igc-0010bc92d2a106dca3aec3c977f4aab1-fea38.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50.3257328990228%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwL/2gAMAwEAAhADEAAAAeiool0FhR//xAAbEAABBAMAAAAAAAAAAAAAAAABAgMhMQARMv/aAAgBAQABBQImRrEGG6VTfH//xAAWEQEBAQAAAAAAAAAAAAAAAAAAATH/2gAIAQMBAT8Bq6//xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQIBAT8BZY//xAAYEAEAAwEAAAAAAAAAAAAAAAAAARExcf/aAAgBAQAGPwLF0xKOIf/EABkQAQADAQEAAAAAAAAAAAAAAAEAECERMf/aAAgBAQABPyFnEDwIQ3vPWhilv//aAAwDAQACAAMAAAAQoP8A/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAERITH/2gAIAQMBAT8QSKND/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAgEBPxAd7BB2/8QAHRABAAICAgMAAAAAAAAAAAAAAQAhEUFRsTFhkf/aAAgBAQABPxBHqozxeQ4YtGmvOKx63ELARKzU7XTKAoVRB8Z//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="IGC map"\n        title=""\n        src="/static/igc-0010bc92d2a106dca3aec3c977f4aab1-f8fb9.jpg"\n        srcset="/static/igc-0010bc92d2a106dca3aec3c977f4aab1-e8976.jpg 148w,\n/static/igc-0010bc92d2a106dca3aec3c977f4aab1-63df2.jpg 295w,\n/static/igc-0010bc92d2a106dca3aec3c977f4aab1-f8fb9.jpg 590w,\n/static/igc-0010bc92d2a106dca3aec3c977f4aab1-85e3d.jpg 885w,\n/static/igc-0010bc92d2a106dca3aec3c977f4aab1-d1924.jpg 1180w,\n/static/igc-0010bc92d2a106dca3aec3c977f4aab1-9452e.jpg 1770w,\n/static/igc-0010bc92d2a106dca3aec3c977f4aab1-fea38.jpg 2456w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em>An exerpt of a paper-map.</em></p>\n<p>I needed the data to be vectorialized in order to store it in a database and render it for different zoom levels. OpenStreetMap’s community created the excellent <a href="http://josm.openstreetmap.de/">JOSM</a>, an advanced cartography editor. This tool is mainly used to be coupled with OpenStreetMap’s data but it is possible to tweak it in order to create your own cartography data. In the case of an underground network gallery, I had to create my own standard of tags and values to label my data, which ended up following OpenStreetMap’s standards.</p>\n<p>The process was very long. The network itself is <em>huge</em>, the total length of the galleries is around 130km of crooky paths. It took me almost 2 months of intense work to do a quick draft of the entire network, and have been working on making some parts more detailed (showcasing the wall types and gallery shapes, carvings and sculptures, paintings, and other furnitures) since then.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/josm-805355405eb68d9dd9f8585fd77fcc34-0a02f.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 61.839080459770116%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAC4klEQVQozx2TWW8aVxiG+Q+thZT0ImkTuwkQbILZBwzMsAzMwizMygxLwLGTSE6ULqkaqVLbi171Jz/91Ksz0pHe87zLFDx9Surq5GnEm9M97xKbW7OOrZyTWZccoy4Puzp38yJ+7QlZ+4y08Zjt6Dn3QZed1WDjdAjUF/izGoWVCObBitDUyDcev5767M0yrlYmi23W5oyNfYNdL2LP5dvoy2MvMRrPCdrfcOuV+HAc8nn3lLdhiYK/XnM4Hglsm/udwi9358TWhDzx2O8zPBFO3T7BqEq09skPJ4JpD1vtojZe4loWaRTgGUMO2ZhCGIbsNgHp2uTPhwof8ysCY0yoNwgXKs60iT+psd1mbHd7Ut8mGrwicQ2Wkx7hak7imewOR9I0F0LPZeMv2Ycz/vpJ4f0pJPVsvGoRr3TGRh6KXFXodDZpgjcfsdY6bCWm/ekOTx/hLTWSNCaTHgpBGJBFLu+2Ol82T9ioNQ5C46l1ls0LovYzsvEVoSXlrR2cm2u56+BNFLzZAKNbwRy3cRcD3ElLCGcdDnaNf76U+OwXMV5/L0XoYrXOIWzgjpss609ZdUs4ahNj1MZUe6wdIXeWmIM61qhFloRCqkqGzpRPb7r8+/VHvr6vsRs8wp9ekVtSRugSeEI1bJBVvyVSqlhzjdW4i78ycV2HlSZZi8s4jrC0HoXYGfH3zxX+eKjKBCrkRo0kmJKYTQJdwbeXRDc1/NY5vjXHWWhiTyMK1wSOLYJlKahHZIp95TWF27THp8NYpjLEWeoSepfYvSFeDElGNfLtllysZdVHhMoVrjEjClxiyTOLQ1z9mshqk1iyCCEvfLS/4zfvB7xBjfWsLYJ9EkfE3MX/bedJQj64ZF8+I68+FnFd5uGzGl1Lvi0SEXWkZaP7gnm/QeEwvuB3u0h0cYbdeSbzWMlv6BAtOnLKRoUm6lXw22UCTSEWWt/sMelcMu28khh0dFXBnrbQBw3+A+d9x9lPN70FAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="JOSM screenshot"\n        title=""\n        src="/static/josm-805355405eb68d9dd9f8585fd77fcc34-fb8a0.png"\n        srcset="/static/josm-805355405eb68d9dd9f8585fd77fcc34-1a291.png 148w,\n/static/josm-805355405eb68d9dd9f8585fd77fcc34-2bc4a.png 295w,\n/static/josm-805355405eb68d9dd9f8585fd77fcc34-fb8a0.png 590w,\n/static/josm-805355405eb68d9dd9f8585fd77fcc34-0a02f.png 870w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/josm2-59b07f5f6b2ad1340dfc55ffa7f46209-5917e.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 69.19831223628692%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADf0lEQVQ4yxWT6VNTZxSH71RayzhFam0taJEthiX7RgjZCNnJdpfcLbnZuEkQBCsWnGqtrbV/99O3H96Z8+E95/y2I5mVGGpuFbNRw+7paLVDGvkks9wO404EXSmjN5f4MFvnJr2OvnYP3btI4/ARrewireAKymmZ0aiHM3CQ1LgPLRHAMSOYlSRKdodec4OrXAArFMJKBbFrD/lrFOVdaZXX6UWuUt9h+b/hNPuAyqGXauw5tfRTqrk4kpyMIfv2MY720MsJtKyfK2WHlzk/d5aXTxMfN60od3U/k8IubvRbXsUkhvtfoYTv09xfQvfcp7d3TwB4jNTMB+iEXiAHfahFD3b7iLflGJ/HIS7NNfr9+9yZu1wf++kcxLBODrEjqzjeBYztBdTtr5G3FtE37tENPELq/rKF6V+hZ0SwtC6jkwxfzmNcT3J0s4fIhSDziAe3ukvP0RiOxgyHfRy1wVCp4qQ26PmW0faWqB94kHrNKlYxjtEqMjKKfLDTDIoRRk4Xu3XKeW2Hu5bQWG4wnc9wz2ZMJudMZucM+ykm8WWmwcc4kZ9QCjtI7szFnU0YOD2mtQNurSC6oNXXO8x7JW6OA9hHfgZ2i+nspRimMRskmbaTjAprQrslhv7vMWLrtMPPkc7ERtedM56YvCpHmXYSDMcmjlXl/cU2v5aT6IlNQVE8K8lksMDf16u8t1PcHm9yEVhmFvsRNb5JK7IhEJ5pnLlnuMN1/pxv0s9mMNNJ+vkYH0zhcMPHW+WQ0XGIWTXIv9ch3mkRtOgWzosHzPcfc1ncohH3omS2kfrqE5HBFX6/+pkbLSqMSArtnjEqhfjD9KBl1nlj7nPXj3FreLis+YTmCdTEGuPgQ8bxNZrlDPV8ArmcRtI7JfTjMF+cKBdKFr0YZqD8wEczyOuS0DObwjZqdCsn4pr26R776BQSmLktBoKuKwa3GyXKlTK1Uh7JkMXZpMN8unrCP3Mfk2oa8yjM58EuA7HVTiUxKnnME1HnxcBMBLUg8tgIM4o/Y7q7jCVMK54UKJcKSFb9GbfNF0ytVdy2n3fTAL8pId50oyJ3tqB3IBpEfRpkqIrwFr3oAlFX6WA263QPdlB9K8ih57QKKWFKI8d1JozdTIrPaaz2Uz6O1jByR7RlRRy8gf4/qkqJsVvH0bYwahm6ch1NlVHlNlqjTFfI0FNO+Q/i+wERPnjLRgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="JOSM screenshot"\n        title=""\n        src="/static/josm2-59b07f5f6b2ad1340dfc55ffa7f46209-fb8a0.png"\n        srcset="/static/josm2-59b07f5f6b2ad1340dfc55ffa7f46209-1a291.png 148w,\n/static/josm2-59b07f5f6b2ad1340dfc55ffa7f46209-2bc4a.png 295w,\n/static/josm2-59b07f5f6b2ad1340dfc55ffa7f46209-fb8a0.png 590w,\n/static/josm2-59b07f5f6b2ad1340dfc55ffa7f46209-5917e.png 711w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em>Editing in JOSM</em></p>\n<p>The data I have at this point is OpenStreetMap-friendly (it uses the same format, even though tags and values are different for my purpose), which means that I could use pretty much any OSM rendering software</p>\n<h2>Render the data: 1st prototype</h2>\n<p>The easiest way to render the cartographic data was to setup a Mapnik server to serve the tiles. In order to do that, I had to put all my data in a Postgres + PostGIS database, which was relatively easy to do using some tools like <a href="https://github.com/openstreetmap/osm2pgsql/"><code>osm2pgsql</code></a>.</p>\n<p>Once that was done, I had to design and define the styles for every object of the map. I wanted an underground feeling, a little bit mysterious but also fascinating, so I went for a dark map with hints of gold, like treasures scattered across the network. At the time, Mapbox was maintaining <a href="https://tilemill-project.github.io/tilemill/">Tilemill</a>, an open source map design studio and was extremely extensible to plug in custom map data like I have. Unfortunately, the project got discontinued and replaced by Mapbox Studio, a powerful editor which achieves the same job, but is also much more coupled with the Mapbox ecosystem, and harder to work with with custom data. Fortunately, around the same time, an open-source project named <a href="https://github.com/kosmtik/kosmtik">Kosmtik</a> led by Johan Boniface was created, and managed to bring the powerful editing tools of Mapbox Studio and the extensibility of its predecessor together again. With that set up, I was finally able to design and get a first preview of how the map would look like.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/design-1-8666f8841410430b0e5aa8d1773fad56-04f9d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 512px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEG0lEQVQ4y22U2WvjVhTG/ZRMYktXq1c5VrzJjvdFtmx5k2zZ8W55T+IsHidOk5A0S8d56KRDJ4GWyUzLQEsZ0jwUCn3oY+n/V9m0UErh43I5nB/3O+eDq/KF/RyfGxfyHbmhs1g4eW+rs12WKmK9nYxz02qPIBCUQGFEo5wQBqxG/bUgGfRagCOqSbn09WbpSsw7rDRspoOjWWpwKne3p0cn1ebgtjlaN1NqFLJHEoRBvwzUst9zxEaWgQYjUNWXxVLIYTNQuhQbRIwUqiWymeTF4VQene/LO0/dvtNsdjDWrCiwER9p0M4qtSBtfgEgrY5QKWY0GNDqcIvNupZpMEJdbtUFPnE4Pj0uivs8f5LJcsmIh7Fl+YjH4Tqryxsuq9fLZNOxOawYQHBUmYHhss7eZWLn3EybLsu1KZ+wUKb7WU+aJMNBX69buZMbzTCrTA7hyEuGVikkOheGYRAVSrrbJ5l0olkpfd/pt0NB2qj/NNn69PnBQ7/z02eT59G2dZ1evIQWHLQK/RtGURxRqsrFYjFmeDYd2LiI8z/W5F0+8U7IHEaiX1XL3zWHcZcHw8EqomY8jn/BCylG1AAyrxmWIYhPu15d9hg7/SbqpVDI5XXm/ewk1z/JtVpRPp+M/RdWhJMYhAObVjfbzXfPCsd7fTvjIPVkNOSF9FjUYf2h1Zkki5Os/P/wEqIZBP1/9AcBi4WmKYACDQoriUxTiXsh56f0y/DKLCP8A5PYXAvbgEB1JHFXEE+S3IdqzWHUrWJwyEbfC9mnXqcn5HLBwEuWfRBzcxjBEYADgGgQHGBaXINAb5yWO1Es8FzBy6hhDUyijXDgY1EaFyWpWNpqt3eFXJBeUyEESpCoJ5ZYj/C4XrcCrzpMhneFYkZszIZ7fT7tZqzxWMhIGZ478k2C0+Ag4GNWUFiNwioYBd4Nh5k2m31hd7ZKuVz7YqHW3CNT9Ywgvm7Unnrti3arEWd/lhvflotcIsw41wEGlNWoLLTSb4MAhCBqNUlkfRuP6Zi/tOXaueXL9Xwh+9xu/dLr/t7t/DYYyF4PZiA2lH4ExhSYYwPIYsOkFl9CYZmm3mYlf67SqEj5Yv5KEB82JcZumUmlZjSqARq/z+V225W9zOFNkYcwZEkJAwMvUPiIDdfyteru9GA0fDze+/N4XPG41VpknErUw5FlRG0wafFFLopU5Yp42q+/slIln5Ok9NfxWC63ySZjBxn+fb9d7e9qTUaYModqx1diwWpdgwECo4rnBRy2mDZT0bexwKQrN8vir6m4LFbrpcYXecnr9dLyuc/v8USj3uH165K8X+NyB6zeqAPY/HtRfUwnb2vVs5KUZLmQ0/a+KBw15NObR250Y68dJNpjNhZJJzkbYzuqyt8cD8UhG/C5NGA+818dOvFvF/Fo+gAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Map early design"\n        title=""\n        src="/static/design-1-8666f8841410430b0e5aa8d1773fad56-04f9d.png"\n        srcset="/static/design-1-8666f8841410430b0e5aa8d1773fad56-dc4e8.png 148w,\n/static/design-1-8666f8841410430b0e5aa8d1773fad56-29209.png 295w,\n/static/design-1-8666f8841410430b0e5aa8d1773fad56-04f9d.png 512w"\n        sizes="(max-width: 512px) 100vw, 512px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em>A very early design prototype, generated with Kosmtik</em></p>\n<h2>On the road to production</h2>\n<p>My needs for the production website were pretty simple: I wanted a tile-rendering server that was efficient (in terms of cost and speed) and easily pluggable with a custom backend, in order to make the tiles available to a selected number of people. I decided to go for a Node backend with a tile-renderer borrowed from the one in Kosmtik but tweaked to fit my restriction needs.</p>\n<p>To fit my efficiency needs, I decided to use my personal server (which is really small - 10GB of disk space, 4 gig of memory, 1 CPU). Such a small server made rendering time go up to the roof, even for only 1 user. I implemented a naïve caching system which would cache on disk every single tile rendered. This approach worked because the map is focused on one area of the world - Paris, so the number of generated tiles for each zoom level is low enough to fit all the tiles on disk.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/celier-c73e1f7bdbba262d177b3acc5bf0cd32-4af96.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 30.90277777777778%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAZ1hvB//xAAaEAACAgMAAAAAAAAAAAAAAAACAwABBBIT/9oACAEBAAEFAjU/flkRAMoP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHRAAAQMFAQAAAAAAAAAAAAAAEQABAgMSITNRov/aAAgBAQAGPwKQqYPVt9OnvkXPV//EABgQAQEBAQEAAAAAAAAAAAAAAAERACFx/9oACAEBAAE/IUPFKF87ixgWeoO//9oADAMBAAIAAwAAABDwD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAAICAwEAAAAAAAAAAAAAAAEhABExQWFx/9oACAEBAAE/ECdjDFtKpKM6gPZnksAxEEVBQTHs/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="zoom levels"\n        title=""\n        src="/static/celier-c73e1f7bdbba262d177b3acc5bf0cd32-f8fb9.jpg"\n        srcset="/static/celier-c73e1f7bdbba262d177b3acc5bf0cd32-e8976.jpg 148w,\n/static/celier-c73e1f7bdbba262d177b3acc5bf0cd32-63df2.jpg 295w,\n/static/celier-c73e1f7bdbba262d177b3acc5bf0cd32-f8fb9.jpg 590w,\n/static/celier-c73e1f7bdbba262d177b3acc5bf0cd32-85e3d.jpg 885w,\n/static/celier-c73e1f7bdbba262d177b3acc5bf0cd32-4af96.jpg 1152w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em>Zooming on the maps reveals some specific details about the place</em></p>\n<p>For the frontend, I initially went for a Jade (now Pug) + vanilla JS setup, and <a href="http://leafletjs.com/">Leaflet</a> for the map, and then added some React-based components later on.</p>\n<p>This map has been live for a year or so, and served to around 100 people.</p>\n<h2>Building a better map.</h2>\n<p>One major issue I had with the setup was the use of tiles. It took a lot of disk space (because of the naïve caching), was slow to render, and doesn’t feel modern. On devices with a high pixel-ratio (smartphones), the map would look pixelated. Also the “tile” feeling (where you can only see the map at certain zoom levels) was not something that I appreciated.</p>\n<p>Vector tiles were already present and was a technology that I tried to investigate back when I was building the first prototype, but I was unable to set it up. This technology is not well documented at all, the biggest implementation belongs to Mapbox and they made it so that the easiest way to use it is to go through their paid APIs. The documentation on how to set it up for home-made solutions is not in place at all, and will probably never be.</p>\n<p>But Mapbox has done great things, and all of them are open source. Which means that even though there is no documentation, the projects themselves are still accessible. While looking around for some information on Vector Tiles, I stumbled across a project named <a href="https://github.com/mapbox/tippecanoe">tippecanoe</a>. This project is exactly what I needed to build vector tiles: it can build <code>.mbtiles</code> files which can be downloaded and rendered on the client, using Mapbox-GL.js library.</p>\n<p><img src="/final-adc67db61b5634339b3c0dcc3dd46320.gif" alt="Vector tiles">\n<em>Preview of the vector tiles</em></p>\n<p>This setup was amazing: the map is no longer rendered on the server, but on the client, which greatly leverages the server load, and enables the creation of vector maps, which are always 100% sharp. Some tweaks were necessary because the style specifications of a MapboxGL map are different than what Leaflet can do, so I had to convert everything from one format to the other, but the end result was fantastic. It also opens up offline possibility: because the map in itself is not so big (around 40Mb), it could be downloaded completely as a whole and cached with service-workers. This could give the opportunity to use the map from inside the tunnels (there is no internet network available 30m under Paris).</p>',frontmatter:{title:"Map Sopal: Behind The Scenes",date:"March 18, 2018"}}},pathContext:{slug:"/map-sopal/",previous:!1,next:!1}}}});
//# sourceMappingURL=path---map-sopal-689be2349694d68340e6.js.map