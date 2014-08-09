/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        //inicio();
    },
};


function inicio(){
    
    gaPlugin = window.plugins.gaPlugin;
    gaPlugin.init(nativePluginResultHandler, nativePluginErrorHandler, "UA-50072156-1", 10);
    analytic("Inicio");
        
//    pushNotification = window.plugins.pushNotification;
//        
//    if (device.platform == 'android' || device.platform == 'Android') {
//        pushNotification.registerDevice({ alert:true, badge:true, sound:true,  projectid: "1042506203716", appid : "666EE-E8D58" },
//                                        function(status) {
//                                            var pushToken = status;
//                                            showStatusMsg('push token: ' + JSON.stringify(pushToken));
//                                        },
//                                        function(status) {
//                                            showStatusMsg(JSON.stringify(['failed to register', status]));
//                                        });
//    } else {
//        pushNotification.registerDevice({ alert:true, badge:true, sound:true,  appname: "es.ceroyuno.granadamobileday", pw_appid : "666EE-E8D58" },
//                                        function(status) {
//                                            var pushToken = status;
//                                            showStatusMsg('push token: ' + JSON.stringify(pushToken));
//                                        },
//                                        function(status) {
//                                            showStatusMsg(JSON.stringify(['failed to register', status]));
//                                        });
//    }
    
    myScrollMenu = new iScroll('menu');
    myScrollContenido = new iScroll('main', {
        onBeforeScrollStart: function (e) {
            var target = e.target;
            while (target.nodeType != 1) target = target.parentNode;
            if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA')e.preventDefault();
        }
    }); 
    
    new FastClick(document.body);    
}

function analytic(seccion){
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, seccion, "Click", "event only", 1);
}