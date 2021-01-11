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

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
document.getElementById('confirm-dialog').addEventListener('click', confirmDialog);
document.getElementById('alert-dialog').addEventListener('click', alertDialog);
document.getElementById('prompt-dialog').addEventListener('click', promptDialog);
document.getElementById('beep-dialog').addEventListener('click', beepDialog);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function confirmDialog() {
    navigator.notification.confirm("Are you sure you want to delete?", confirmCallback,"Are you sure?", ["NO", "YES"]);

    function confirmCallback(index) {
        navigator.notification.alert(`Button index num :  ${index}`, null,"Callback", "OK");
    }
}

function alertDialog() {
    navigator.notification.alert("Message", null,"Title", "OK");
}

function promptDialog() {
    navigator.notification.prompt("What is your name?", promptCallback, "Are you a robot?", ["SEND"], null);

    function promptCallback(value) {
        navigator.notification.alert(value.input1, null, "Your name is:", "OK");
    }
}

function beepDialog() {
    navigator.notification.beep(2);
}