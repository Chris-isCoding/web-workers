# web-workers

A web worker is a JavaScript running in the background, without affecting the performance of the page.

It allows JavaScript to execute in a different thread, maximizing the usage of multiple CPUs; but most importantly not blocking the main thread.

The main thread is where Javascript runs by default and has access to the document, window and other DOM APIs. The problem is that long-running JS prevents the browser from running smooth animations (CSS animations, transitions, canvas, svg...), making your site look frozen. That's why if your application needs to run CPU-intensive tasks, Web Workers are a great help.
When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.

A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.
