# WhatsApp for Desktop (unofficial)

Native multi-platform desktop client for WhatsApp using whatsapp web interface. Your phone should be connected to internet to use this. 


## Features

* Unread message count on Dock.
* Desktop notifications.

## Downloads
 * [Mac](https://github.com/preems/whatsapp-desktop/releases/download/v1.2.1/WhatsApp.dmg)
 * [Windows 64bit](https://github.com/preems/whatsapp-desktop/releases/download/v1.2.1/WhatsAppWin64.exe)
 * [Windows 32bit](https://github.com/preems/whatsapp-desktop/releases/download/v1.2.1/WhatsAppWin32.exe)

## Build


    // install gulp
    $ npm install -g gulp

    // install dependencies
    $ npm install
    
    // OSX Build
    $ gulp package-osx64
    
    // Windows build ( Requires wine on OSX/Linux )
    $ gulp build-win64
    $ gulp build-win32
    
    // Packing a installer for windows. 
    // This requires you to install "makensis" seperately.
    $ gulp package-win64
    $ gulp package-win32
    
    //By default gulp will build for all platforms. Avoid using it if you dont have all dependencies.
    $ gulp
    

Note: This is not a reverse engineered API or any illegal hack. This is just a wrapper application which uses WhatsApp web interface. 

Please raise issues on github if you face any problem.

[Checkout more about me and my projects](http://preetham.in)
