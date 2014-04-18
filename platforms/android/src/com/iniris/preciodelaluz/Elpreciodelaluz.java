/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.iniris.preciodelaluz;

import android.os.Bundle;
import org.apache.cordova.*;
//A�adido para mete publicidad phonegap
import com.google.ads.*;
import android.widget.LinearLayout;
import com.google.analytics.tracking.android.EasyTracker;

public class Elpreciodelaluz extends CordovaActivity 
{
	//Inicio meter publicidad phonegap
	private static final String AdMob_Ad_Unit = "ca-app-pub-2689062467644026/1704412397";
	private AdView adView;
	//Fin meter publicidad phonegap
	
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.init();
        // Set by <content src="index.html" /> in config.xml
        super.loadUrl(Config.getStartUrl());
        //super.loadUrl("file:///android_asset/www/index.html");
        
        //Inicio meter publicidad phonegap
        adView = new AdView(this, AdSize.BANNER, AdMob_Ad_Unit);
        LinearLayout layout = super.root;
        layout.addView(adView);
        AdRequest request = new AdRequest();
        request.setTesting(false);
        adView.loadAd(request);
        //Fin meter publicidad phonegap
    }
    /*************************************************** 
     ***  A�adir estos m�todos para Google Analytics ***
     ***************************************************/
    @Override
    protected void onStart() {
        super.onStart();
        EasyTracker.getInstance(this).activityStart(this);
    }

    @Override
    protected void onStop() {
        super.onStop();
        EasyTracker.getInstance(this).activityStop(this);
    }
    /********************************************************* 
     *** FIN de a�adir estos m�todos para Google Analytics ***
     *********************************************************/
}