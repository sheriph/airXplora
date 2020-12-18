import { Box } from "@material-ui/core";
import React from "react";
import Head from "next/head";

const ShowPost = ({ content }) => {
  if (!content) return <>Loading Post</>;

  return (
    <Box>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <style jsx global>{`
        a,
        body,
        div,
        form,
        h2,
        html,
        iframe,
        label,
        li,
        p,
        span,
        strong,
        ul {
         
          border: 0;
          font-size: 100%;
          font-style: inherit;
          font-weight: inherit;
          margin: 0;
          outline: rgb(0, 0, 0);
          padding: 0;
          vertical-align: baseline;
        }
        body {
          margin: 0;
        }
        article,
        footer,
        header,
        main,
        nav,
        section {
          display: block;
        }
        a {
          background-color: transparent;
        }
        a {
          text-decoration: none;
        }
        strong {
          font-weight: 700;
        }
        img {
          border: 0;
        }
        svg:not(:root) {
          overflow: hidden;
        }
        button,
        input {
          color: inherit;
          font-family: inherit;
          font-size: inherit;
          font-style: inherit;
          font-variant: inherit;
          font-weight: inherit;
          line-height: inherit;
          margin: 0;
        }
        button {
          overflow: visible;
        }
        button {
          text-transform: none;
        }
        button,
        input[type="submit"] {
          -webkit-appearance: button;
        }
        input {
          line-height: normal;
        }
        .ast-container {
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
        }
        .ast-container::after {
          content: "";
          display: table;
          clear: both;
        }
        @media (min-width: 544px) {
          .ast-container {
            max-width: 100%;
          }
        }
        .ast-row {
          margin-left: -20px;
          margin-right: -20px;
        }
        .ast-row::after {
          content: "";
          display: table;
          clear: both;
        }
        .ast-col-lg-3,
        .ast-col-md-3,
        .ast-col-sm-12,
        .ast-col-xs-12 {
          position: relative;
          min-height: 1px;
          padding-left: 20px;
          padding-right: 20px;
        }
        .ast-col-xs-12 {
          float: left;
        }
        .ast-col-xs-12 {
          width: 100%;
        }
        @media (min-width: 544px) {
          .ast-col-sm-12 {
            float: left;
          }
          .ast-col-sm-12 {
            width: 100%;
          }
        }
        h2 {
          clear: both;
        }
        .entry-content h2,
        h2 {
          color: rgb(128, 130, 133);
          font-size: 1.7em;
          line-height: 1.3;
        }
        html {
          box-sizing: border-box;
        }
        *,
        ::after,
        ::before {
          box-sizing: inherit;
        }
        body {
          color: rgb(128, 130, 133);
          background-color: rgb(255, 255, 255);
          font-style: normal;
          background-position: initial initial;
          background-repeat: initial initial;
        }
        ul {
          margin: 0 0 1.5em 3em;
        }
        ul {
          list-style: disc;
        }
        strong {
          font-weight: 700;
        }
        i {
          font-style: italic;
        }
        img {
          height: auto;
          max-width: 100%;
        }
        button,
        input {
          color: rgb(128, 130, 133);
          font-weight: 400;
          font-size: 100%;
          margin: 0;
          vertical-align: baseline;
        }
        button,
        input {
          line-height: normal;
        }
        ul {
          margin: 0 0 1.5em 3em;
        }
        ul {
          list-style: disc;
        }
        button,
        input[type="submit"] {
          border: 1px solid rgb(234, 234, 234);
          border-top-left-radius: 2px;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          border-bottom-left-radius: 2px;
          background-color: rgb(230, 230, 230);
          padding: 0.6em 1em 0.4em;
          color: rgb(255, 255, 255);
          background-position: initial initial;
          background-repeat: initial initial;
        }
        input[type="email"],
        input[type="text"] {
          color: rgb(102, 102, 102);
          border: 1px solid rgb(204, 204, 204);
          border-top-left-radius: 2px;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          border-bottom-left-radius: 2px;
          -webkit-appearance: none;
        }
        a {
          color: rgb(65, 105, 225);
        }
        .screen-reader-text {
          border: 0;
          clip: rect(1px 1px 1px 1px);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
          word-wrap: normal !important;
        }
        #primary::after,
        #primary::before,
        .ast-container::after,
        .ast-container::before,
        .ast-row::after,
        .ast-row::before,
        .clear::after,
        .clear::before,
        .site-content::after,
        .site-content::before,
        .site-footer::after,
        .site-footer::before,
        .site-header::after,
        .site-header::before,
        .site-main::after,
        .site-main::before {
          content: "";
          display: table;
        }
        #primary::after,
        .ast-container::after,
        .ast-row::after,
        .clear::after,
        .site-content::after,
        .site-footer::after,
        .site-header::after,
        .site-main::after {
          clear: both;
        }
        iframe {
          max-width: 100%;
        }
        body {
          -webkit-font-smoothing: antialiased;
        }
        body:not(.logged-in) {
          position: relative;
        }
        #page {
          position: relative;
        }
        a {
          text-decoration: none;
        }
        img {
          vertical-align: middle;
        }
        .entry-content h2 {
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 1.75em;
        }
        input[type="submit"] {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
          padding: 18px 30px;
          border: 0;
          box-shadow: none;
          text-shadow: none;
        }
        .site .skip-link {
          background-color: rgb(241, 241, 241);
          box-shadow: rgba(0, 0, 0, 0.2) 0 0 1px 1px;
          color: rgb(33, 117, 155);
          display: block;
          font-family: Montserrat, "Helvetica Neue", sans-serif;
          font-size: 14px;
          font-weight: 700;
          left: -9999em;
          outline: rgb(0, 0, 0);
          padding: 15px 23px 14px;
          text-decoration: none;
          text-transform: none;
          top: -9999em;
        }
        input {
          line-height: 1;
        }
        body,
        button,
        input[type="submit"] {
          line-height: 1.85714285714286;
        }
        body {
          background-color: rgb(255, 255, 255);
        }
        #page {
          display: block;
        }
        #primary {
          display: block;
          position: relative;
          float: left;
          width: 100%;
        }
        #primary {
          margin: 4em 0;
        }
        .ast-page-builder-template .site-content > .ast-container {
          max-width: 100%;
          padding: 0;
        }
        .ast-page-builder-template .site-content #primary {
          padding: 0;
          margin: 0;
        }
        .ast-page-builder-template .entry-header {
          margin-top: 4em;
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
        }
        .ast-page-builder-template .entry-header.ast-header-without-markup {
          margin-top: 0;
          margin-bottom: 0;
        }
        @media (max-width: 768px) {
          .ast-page-builder-template .entry-header {
            margin-top: 1.5em;
          }
        }
        @media (max-width: 768px) {
          #primary {
            padding: 1.5em 0;
            margin: 0;
          }
        }
        .main-navigation {
          height: 100%;
        }
        .main-navigation ul {
          list-style: none;
          margin: 0;
          padding-left: 0;
          position: relative;
        }
        .main-header-menu a {
          text-decoration: none;
          padding: 0 1em;
          display: inline-block;
        }
        .main-header-menu li {
          position: relative;
        }
        .ast-mobile-menu-buttons {
          display: none;
        }
        .ast-button-wrap {
          display: inline-block;
        }
        .ast-button-wrap button {
          box-shadow: none;
          border: none;
        }
        .ast-button-wrap .menu-toggle {
          padding: 0;
          width: 2.2em;
          height: 2.1em;
          font-size: 1.5em;
          font-weight: 400;
          -webkit-font-smoothing: antialiased;
          border-top-left-radius: 2px;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          border-bottom-left-radius: 2px;
          vertical-align: middle;
          line-height: 1.85714285714286;
        }
        .ast-button-wrap .menu-toggle.main-header-menu-toggle {
          padding: 0 0.5em;
          width: auto;
          text-align: center;
        }
        .ast-button-wrap .menu-toggle .menu-toggle-icon {
          font-style: normal;
          display: inline-block;
          vertical-align: middle;
          line-height: 2.05;
        }
        .ast-button-wrap .menu-toggle .menu-toggle-icon::before {
          content: "\e5d2";
          font-family: Astra;
          text-decoration: inherit;
        }
        .header-main-layout-1 .ast-main-header-bar-alignment {
          margin-left: auto;
        }
        #site-navigation {
          height: 100%;
        }
        .main-header-bar {
          z-index: 1;
        }
        .header-main-layout-1 .main-header-bar-navigation {
          text-align: right;
        }
        .header-main-layout-1 .main-navigation {
          padding-left: 15px;
          vertical-align: top;
        }
        @media (max-width: 544px) {
          .site-branding img,
          .site-header .site-logo-img .custom-logo-link img {
            max-width: 100%;
          }
        }
        .site-header {
          z-index: 99;
          position: relative;
        }
        .main-header-container {
          position: relative;
        }
        .main-header-bar-wrap {
          position: relative;
        }
        .main-header-bar {
          background-color: rgb(255, 255, 255);
          border-bottom-color: rgb(234, 234, 234);
          border-bottom-style: solid;
        }
        .main-header-bar {
          margin-left: auto;
          margin-right: auto;
        }
        .site-branding {
          line-height: 1;
        }
        .main-header-bar {
          z-index: 4;
          position: relative;
          line-height: 4;
        }
        .main-header-bar .main-header-bar-navigation {
          height: 100%;
        }
        .ast-masthead-custom-menu-items {
          padding: 0 1em;
        }
        .ast-site-identity {
          padding: 1em 0;
        }
        .entry-content > :last-child {
          margin-bottom: 0;
        }
        body {
          overflow-x: hidden;
        }
        .widget-title {
          font-weight: 400;
          margin-bottom: 1em;
          line-height: 1.5;
        }
        .widget {
          margin: 0 0 2.8em;
        }
        .widget:last-child {
          margin-bottom: 0;
        }
        .ast-footer-overlay {
          background-color: rgb(58, 58, 58);
          padding-top: 2em;
          padding-bottom: 2em;
        }
        .ast-small-footer {
          line-height: 1.85714285714286;
          position: relative;
        }
        .footer-sml-layout-1 {
          text-align: center;
        }
        .footer-sml-layout-1 .ast-small-footer-section-2 {
          margin-top: 1em;
        }
        .site-footer {
          color: rgb(255, 255, 255);
        }
        .site-footer .widget-title {
          color: rgb(234, 234, 234);
        }
        .site-footer a {
          color: rgb(234, 234, 234);
        }
        .footer-adv-overlay {
          background-color: rgb(58, 58, 58);
          padding-top: 70px;
          padding-bottom: 70px;
        }
        .footer-adv p:last-child {
          margin-bottom: 0;
        }
        @media (max-width: 768px) {
          .footer-adv-widget-1 .widget:last-child {
            margin: 0 0 2.8em;
          }
        }
        @media (max-width: 768px) {
          .footer-adv-layout-4 .footer-adv-widget-2 .widget:last-child,
          .footer-adv-layout-4 .footer-adv-widget-3 .widget:last-child {
            margin: 0 0 2.8em;
          }
        }
        input[type="email"],
        input[type="text"] {
          color: rgb(102, 102, 102);
          padding: 0.75em;
          height: auto;
          border: 1px solid rgb(234, 234, 234);
          border-top-left-radius: 2px;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          border-bottom-left-radius: 2px;
          background-color: rgb(250, 250, 250);
          box-shadow: none;
          box-sizing: border-box;
          background-position: initial initial;
          background-repeat: initial initial;
        }
        input[type="submit"] {
          box-shadow: none;
        }
        .page .entry-header {
          margin-bottom: 1.5em;
        }
        .ast-single-post .entry-header.ast-header-without-markup {
          margin-bottom: 0;
        }
        .entry-header {
          margin-bottom: 1em;
          word-wrap: break-word;
        }
        .entry-content {
          word-wrap: break-word;
        }
        html {
          font-size: 100%;
        }
        a {
          color: rgb(0, 69, 154);
        }
        body,
        button,
        input {
          font-family: "Open Sans", sans-serif;
          font-weight: 400;
          font-size: 1rem;
        }
        h2,
        .entry-content h2 {
          font-family: Merriweather, serif;
          font-weight: 700;
        }
        header .site-logo-img .custom-logo-link img {
          max-width: 120px;
        }
        h2,
        .entry-content h2 {
          font-size: 2.125rem;
        }
        body,
        h2,
        .entry-content h2 {
          color: rgb(0, 0, 0);
        }
        .main-header-menu a {
          color: rgb(0, 0, 0);
        }
        .ast-small-footer {
          color: rgb(198, 198, 198);
        }
        .ast-small-footer > .ast-footer-overlay {
          background-color: rgb(0, 21, 36);
        }
        .footer-adv .footer-adv-overlay {
          border-top-style: solid;
          border-top-color: rgb(122, 122, 122);
        }
        .footer-adv-overlay {
          background-color: rgb(0, 69, 154);
        }
        .menu-toggle,
        button,
        input[type="submit"] {
          border-top-left-radius: 60px;
          border-top-right-radius: 60px;
          border-bottom-right-radius: 60px;
          border-bottom-left-radius: 60px;
          padding: 8px 25px;
          color: rgb(255, 255, 255);
          border-color: rgb(139, 195, 74);
          background-color: rgb(139, 195, 74);
        }
        .widget-title {
          font-size: 1.375rem;
          color: rgb(0, 0, 0);
        }
        @media (max-width: 768px) {
          h2,
          .entry-content h2 {
            font-size: 25px;
          }
          #masthead .site-logo-img .custom-logo-link img {
            max-width: 120px;
          }
        }
        @media (max-width: 544px) {
          h2,
          .entry-content h2 {
            font-size: 25px;
          }
        }
        @media (max-width: 768px) {
          html {
            font-size: 91.2%;
          }
        }
        @media (max-width: 544px) {
          html {
            font-size: 91.2%;
          }
        }
        @font-face {
          font-family: Astra;
          src: url(https://naijagoingabroad.com/wp-content/themes/astra/assets/fonts/astra.woff)
              format("woff"),
            url(https://naijagoingabroad.com/wp-content/themes/astra/assets/fonts/astra.ttf)
              format("truetype"),
            url(https://naijagoingabroad.com/wp-content/themes/astra/assets/fonts/astra.svg#astra)
              format("svg");
          font-weight: 400;
          font-style: normal;
        }
        @media (max-width: 921px) {
          .main-header-bar .main-header-bar-navigation {
            display: none;
          }
        }
        .ast-small-footer {
          border-top-style: solid;
          border-top-width: 1px;
          border-top-color: rgb(63, 63, 63);
        }
        .ast-small-footer-wrap {
          text-align: center;
        }
        .ast-flex {
          -webkit-align-content: center;
          -webkit-box-align: center;
          -webkit-align-items: center;
        }
        .main-header-bar {
          padding: 1em 0;
        }
        .ast-site-identity {
          padding: 0;
        }
        .header-main-layout-1 .ast-flex.main-header-container {
          -webkit-align-content: center;
          -webkit-box-align: center;
          -webkit-align-items: center;
        }
        .header-main-layout-1 .ast-flex.main-header-container {
          -webkit-align-content: center;
          -webkit-box-align: center;
          -webkit-align-items: center;
        }
        .screen-reader-text {
          clip: rect(1px 1px 1px 1px);
          height: 1px;
          overflow: hidden;
          position: absolute;
          width: 1px;
          word-wrap: normal;
        }
        .bdp_email_share {
          background-color: rgb(255, 255, 255);
          border: 1px solid rgb(204, 204, 204);
          box-shadow: rgb(204, 204, 204) 0 0 10px;
          padding: 15px;
          position: absolute;
          display: none;
          z-index: 2;
          background-position: initial initial;
          background-repeat: initial initial;
        }
        .bdp-close {
          display: inline;
          float: right;
        }
        .bdp-close_button {
          padding-left: 10px;
          display: inline;
        }
        #bdp_email_share form > div {
          padding-top: 12px;
        }
        #bdp_email_share label {
          font-weight: 400;
          font-size: 12px;
        }
        #bdp_email_share input[type="text"],
        #bdp_email_share input[type="email"] {
          padding: 5px;
        }
        .clearfix::before,
        .clearfix::after {
          content: " ";
          display: table;
        }
        .clearfix::after {
          clear: both;
        }
        .screen-reader-text {
          position: absolute;
          top: -10000em;
          width: 1px;
          height: 1px;
          margin: -1px;
          padding: 0;
          overflow: hidden;
          clip: rect(0 0 0 0);
          border: 0;
        }
        .elementor {
          -webkit-hyphens: manual;
        }
        .elementor *,
        .elementor ::after,
        .elementor ::before {
          box-sizing: border-box;
        }
        .elementor iframe {
          max-width: 100%;
          width: 100%;
          margin: 0;
          line-height: 1;
          border: none;
        }
        .elementor-section {
          position: relative;
        }
        .elementor-section .elementor-container {
          display: -webkit-flex;
          margin-right: auto;
          margin-left: auto;
          position: relative;
        }
        .elementor-section.elementor-section-boxed > .elementor-container {
          max-width: 1140px;
        }
        .elementor-row {
          width: 100%;
          display: -webkit-flex;
        }
        @media (max-width: 1024px) {
          .elementor-row {
            -webkit-flex-wrap: wrap;
          }
        }
        .elementor-column-wrap {
          width: 100%;
          position: relative;
          display: -webkit-flex;
        }
        .elementor-widget-wrap {
          position: relative;
          width: 100%;
          -webkit-flex-wrap: wrap;
          -webkit-align-content: flex-start;
        }
        .elementor:not(.elementor-bc-flex-widget) .elementor-widget-wrap {
          display: -webkit-flex;
        }
        .elementor-widget-wrap > .elementor-element {
          width: 100%;
        }
        .elementor-widget {
          position: relative;
        }
        .elementor-column {
          position: relative;
          min-height: 1px;
          display: -webkit-flex;
        }
        .elementor-column-gap-default
          > .elementor-row
          > .elementor-column
          > .elementor-element-populated {
          padding: 10px;
        }
        .elementor-column-gap-wider
          > .elementor-row
          > .elementor-column
          > .elementor-element-populated {
          padding: 30px;
        }
        @media (max-width: 767px) {
          .elementor-column {
            width: 100%;
          }
        }
        .elementor-widget-heading .elementor-heading-title {
          padding: 0;
          margin: 0;
          line-height: 1;
        }
        .elementor-widget-heading
          .elementor-heading-title.elementor-size-large {
          font-size: 29px;
        }
        .elementor-widget-heading.elementor-widget-heading
          .elementor-heading-title {
          color: rgb(110, 193, 228);
        }
        .elementor-widget-heading .elementor-heading-title {
          font-family: Roboto, sans-serif;
          font-weight: 600;
        }
        #content::before {
          content: "768";
          position: absolute;
          overflow: hidden;
          opacity: 0;
          visibility: hidden;
        }
        @media (max-width: 768px) {
          #content::before {
            content: "";
          }
        }
        .footer-adv p:last-child {
          margin-bottom: 0;
        }
        @media (max-width: 768px) {
          .footer-adv-widget-1 .widget:last-child {
            margin: 0 0 2.8em;
          }
        }
        @media (max-width: 768px) {
          .footer-adv-layout-4 .footer-adv-widget-2 .widget:last-child,
          .footer-adv-layout-4 .footer-adv-widget-3 .widget:last-child {
            margin: 0 0 2.8em;
          }
        }
        .ast-above-header-menu a {
          text-decoration: none;
          padding: 0 1em;
          display: inline-block;
        }
        .ast-above-header-menu li {
          position: relative;
        }
        .ast-above-header-navigation ul {
          list-style: none;
          margin: 0;
          padding-left: 0;
        }
        .above-header-nav-padding-support
          .ast-justify-content-flex-start
          .ast-above-header-menu
          > li:first-child
          a {
          padding-left: 0;
        }
        .ast-above-header {
          z-index: 5;
        }
        .ast-above-header-wrap {
          position: relative;
        }
        .ast-above-header-section .user-select {
          text-align: center;
        }
        .ast-above-header {
          background-color: rgb(255, 255, 255);
          border-bottom-width: 1px;
          border-bottom-style: solid;
          border-bottom-color: rgb(234, 234, 234);
          margin-left: auto;
          margin-right: auto;
          position: relative;
          background-position: initial initial;
          background-repeat: initial initial;
        }
        .ast-above-header .user-select {
          position: relative;
        }
        .ast-above-header-menu-items {
          display: none;
        }
        @media (max-width: 544px) {
          .ast-above-header {
            padding-top: 0.5em;
          }
        }
        #ast-scroll-top {
          display: none;
          position: fixed;
          text-align: center;
          z-index: 99;
          width: 2.1em;
          height: 2.1em;
          line-height: 2.1;
          color: rgb(255, 255, 255);
          border-top-left-radius: 2px;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          border-bottom-left-radius: 2px;
          content: "";
        }
        .ast-scroll-to-top-left {
          left: 30px;
          bottom: 30px;
        }
        .ast-scroll-top-icon::before {
          content: "\e900";
          font-family: Astra;
          text-decoration: inherit;
        }
        .ast-site-header-cart .ast-woo-header-cart-info-wrap {
          padding: 0 2px;
          font-weight: 600;
          line-height: 2.7;
          display: inline-block;
        }
        .ast-site-header-cart i.astra-icon {
          font-size: 1.3em;
          font-style: normal;
          font-weight: 400;
          position: relative;
          padding: 0 2px;
        }
        .ast-site-header-cart i.astra-icon::before {
          font-family: Astra;
        }
        .ast-site-header-cart i.astra-icon::after {
          content: attr(data-cart-total);
          position: absolute;
          font-style: normal;
          top: -10px;
          right: -12px;
          font-weight: 700;
          box-shadow: rgba(0, 0, 0, 0.298039) 1px 1px 3px 0;
          font-size: 11px;
          padding-left: 0;
          padding-right: 2px;
          line-height: 17px;
          letter-spacing: -0.5px;
          height: 18px;
          min-width: 18px;
          border-top-left-radius: 99px;
          border-top-right-radius: 99px;
          border-bottom-right-radius: 99px;
          border-bottom-left-radius: 99px;
          text-align: center;
          z-index: 1;
        }
        .ast-icon-shopping-basket::before {
          content: "\f291";
        }
        .ast-quick-view-bg {
          position: fixed;
          visibility: hidden;
          overflow: hidden;
          background-color: rgb(11, 11, 11);
          opacity: 0;
          z-index: 1042;
          background-position: initial initial;
          background-repeat: initial initial;
        }
        .ast-quick-view-loader {
          z-index: 1000;
          border: none;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: absolute;
        }
        #ast-quick-view-modal {
          position: fixed;
          visibility: hidden;
          opacity: 0;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1400;
          text-align: center;
          overflow-x: hidden;
          overflow-y: auto;
        }
        #ast-quick-view-modal .ast-content-main-wrapper {
          position: absolute;
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
          border-bottom-left-radius: 3px;
          top: 50%;
          left: 50%;
          width: 80%;
        }
        #ast-quick-view-modal .ast-content-main-wrapper::before {
          content: "";
          display: inline-block;
          vertical-align: middle;
          height: 100%;
        }
        #ast-quick-view-modal .ast-content-main {
          position: relative;
          display: inline-block;
          vertical-align: middle;
          max-width: 100%;
          margin: 0 auto;
          text-align: left;
          z-index: 1045;
          opacity: 0;
        }
        #ast-quick-view-modal .ast-content-main::after,
        #ast-quick-view-modal .ast-content-main::before {
          content: "";
          display: table;
          clear: both;
        }
        #ast-quick-view-modal .ast-lightbox-content {
          display: table;
          background-color: rgb(255, 255, 255);
          margin: 0 auto;
          box-shadow: rgba(0, 0, 0, 0.14902) 3px 3px 20px 0;
          position: relative;
        }
        #ast-quick-view-content {
          height: 100%;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          #ast-quick-view-modal .ast-content-main-wrapper {
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            position: relative;
            overflow: hidden;
            padding: 10%;
          }
        }
        #ast-quick-view-close {
          position: absolute;
          font-size: 1em;
          top: -15px;
          right: -15px;
          width: 22px;
          height: 22px;
          line-height: 22px;
          text-align: center;
          z-index: 2;
          background-color: rgb(255, 255, 255);
          color: rgb(0, 0, 0);
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          border-bottom-right-radius: 50%;
          border-bottom-left-radius: 50%;
          box-shadow: rgb(76, 76, 76) 0 0 4px;
          background-position: initial initial;
          background-repeat: initial initial;
        }
        #ast-quick-view-close::before {
          content: "\e5cd";
          font-family: Astra;
          text-decoration: inherit;
        }
        .ast-small-footer {
          color: rgb(198, 198, 198);
        }
        .main-header-bar {
          background-color: rgb(255, 255, 255);
          background-image: none;
        }
        .footer-adv .widget-title {
          font-family: "Open Sans", sans-serif;
          text-transform: inherit;
        }
        .footer-adv .widget > :not(.widget-title) {
          font-family: "Open Sans", sans-serif;
        }
        .ast-above-header {
          border-bottom-width: 2px;
          line-height: 30px;
        }
        .ast-above-header-menu,
        .ast-above-header .user-select {
          font-size: 0.8125rem;
        }
        .ast-above-header-section-wrap {
          min-height: 30px;
        }
        .ast-above-header {
          background-color: rgb(0, 69, 154);
          background-image: none;
        }
        .ast-above-header-navigation a {
          color: rgb(255, 255, 255);
        }
        @media (max-width: 921px) {
          .ast-above-header-navigation {
            display: none;
          }
        }
        .site-header .ast-site-identity {
          padding: 10px;
        }
        .main-header-bar {
          padding-top: 0;
          padding-bottom: 0;
        }
        .main-navigation ul li a {
          padding-right: 20px;
          padding-left: 20px;
        }
        .ast-footer-overlay {
          padding-top: 25px;
          padding-bottom: 25px;
        }
        .ast-small-footer .ast-container {
          padding-left: 0;
          padding-right: 0;
        }
        @media (max-width: 768px) {
          .site-header .ast-site-identity {
            padding: 0 0 10px;
          }
          .main-header-bar {
            padding-top: 1.5em;
            padding-bottom: 1.5em;
          }
          .main-navigation ul li a {
            padding: 0 20px;
          }
          .ast-above-header {
            padding-top: 0;
            padding-bottom: 0;
          }
          .ast-above-header-enabled
            .ast-above-header-navigation
            .ast-above-header-menu
            > li
            > a {
            padding: 0 20px;
          }
          .ast-footer-overlay {
            padding-top: 1em;
            padding-bottom: 1em;
          }
        }
        @media (max-width: 544px) {
          .site-header .ast-site-identity {
            padding: 5px;
          }
          .main-header-bar {
            padding-top: 1em;
            padding-bottom: 1em;
          }
        }
        #ast-scroll-top {
          color: rgb(255, 255, 255);
          background-color: rgba(0, 69, 154, 0.8);
          font-size: 0.9375rem;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }
        .main-navigation {
          font-size: 0.875rem;
          font-weight: 500;
        }
        .main-header-bar .main-header-bar-navigation {
          text-transform: uppercase;
        }
        .ast-small-footer {
          font-size: 0.75rem;
          font-weight: 400;
          text-transform: uppercase;
        }
        h2,
        .entry-content h2 {
          font-family: Merriweather, serif;
          text-transform: inherit;
        }
        button,
        input[type="submit"] {
          font-size: 0.9375rem;
          font-weight: 400;
          text-transform: uppercase;
        }
        .ast-above-header-menu-items {
          font-size: 0.875rem;
          font-weight: 500;
        }
        .ast-site-header-cart i.astra-icon::after {
          background-color: rgb(51, 204, 102);
          color: rgb(0, 0, 0);
          background-position: initial initial;
          background-repeat: initial initial;
        }
        .ast-masthead-custom-menu-items.woocommerce-custom-menu-item {
          padding: 0;
        }
        .woocommerce-custom-menu-item .ast-addon-cart-wrap {
          padding: 0 0.6em;
        }
        .clear {
          clear: both;
        }
        div.asp_hidden_data,
        div.asp_hidden_data * {
          display: none;
        }
        ::before,
        ::after {
          box-sizing: border-box;
        }
        @font-face {
          font-family: Genericons;
          src: url(/wp-content/plugins/everest-tab/assets/css/available_icons/./Genericons.eot?)
            format("embedded-opentype");
          font-weight: 400;
          font-style: normal;
        }
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
          @font-face {
            font-family: Genericons;
            src: url(/wp-content/plugins/everest-tab/assets/css/available_icons/./Genericons.svg#Genericons)
              format("svg");
          }
        }
        @font-face {
          font-family: Flaticon;
          src: url(/wp-content/plugins/everest-tab/assets/css/available_icons/flaticons/./Flaticon.eot?#iefix)
              format("embedded-opentype"),
            url(/wp-content/plugins/everest-tab/assets/css/available_icons/flaticons/./Flaticon.woff)
              format("woff"),
            url(/wp-content/plugins/everest-tab/assets/css/available_icons/flaticons/./Flaticon.ttf)
              format("truetype"),
            url(/wp-content/plugins/everest-tab/assets/css/available_icons/flaticons/./Flaticon.svg#Flaticon)
              format("svg");
          font-weight: 400;
          font-style: normal;
        }
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
          @font-face {
            font-family: Flaticon;
            src: url(/wp-content/plugins/everest-tab/assets/css/available_icons/flaticons/./Flaticon.svg#Flaticon)
              format("svg");
          }
        }
        @font-face {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 300;
          src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhs.ttf)
            format("truetype");
        }
        @font-face {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0e.ttf)
            format("truetype");
        }
        @font-face {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 700;
          src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhs.ttf)
            format("truetype");
        }
        @font-face {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0e.ttf)
            format("truetype");
        }
        @font-face {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 700;
          src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhs.ttf)
            format("truetype");
        }
        .et_bloom .et_bloom_optin div,
        .et_bloom .et_bloom_optin span,
        .et_bloom .et_bloom_optin h2,
        .et_bloom .et_bloom_optin p,
        .et_bloom .et_bloom_optin strong {
          text-transform: none;
          font-weight: 400;
          margin: 0;
          padding: 0;
          border: 0;
          outline: rgb(0, 0, 0);
          font-size: 100%;
          vertical-align: baseline;
          background-image: none;
          box-sizing: content-box;
          -webkit-font-smoothing: antialiased;
        }
        .et_bloom .et_bloom_optin button {
          background-image: none;
          background-position: initial initial;
          background-repeat: initial initial;
        }
        @font-face {
          font-family: ET-Bloom;
          src: url(/wp-content/plugins/bloom/css/fonts/ET-Bloom.eot?#iefixgd6mr8)
              format("embedded-opentype"),
            url(/wp-content/plugins/bloom/css/fonts/ET-Bloom.woff?gd6mr8)
              format("woff"),
            url(/wp-content/plugins/bloom/css/fonts/ET-Bloom.ttf?gd6mr8)
              format("truetype"),
            url(/wp-content/plugins/bloom/css/fonts/ET-Bloom.svg?gd6mr8#ETdashboard)
              format("svg");
          font-weight: 400;
          font-style: normal;
        }
        .et_bloom button.et_bloom_submit_subscription {
          position: relative;
        }
        .et_bloom .et_bloom_subscribe_loader {
          display: none;
          width: 16px;
          height: 16px;
          position: absolute;
          left: 50%;
          top: 50%;
          background-image: url(data:image/gif;base64,R0lGODlhEAAQAIABAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzNFNzlBN0QyNEJCMTFFNDg1QjREOUVBRjcwQ0I2MUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzNFNzlBN0UyNEJCMTFFNDg1QjREOUVBRjcwQ0I2MUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3M0U3OUE3QjI0QkIxMUU0ODVCNEQ5RUFGNzBDQjYxQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3M0U3OUE3QzI0QkIxMUU0ODVCNEQ5RUFGNzBDQjYxQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUNAAEALAAAAAAQABAAAAIjhBFxqHu5oDOStllZTHxvfmkPGGZkiZ7gp5ptN76pTNf2HRQAIfkECQ0AAQAsAAAEABAADAAAAhiEEambhwwdjGdaJW+rOmT9dUtokZNJGQUAIfkECQ0AAQAsAAAAABAAEAAAAiOMj6nL7Q0iMHKGWqnU2ObbeRvYcWJJnphpfu6IfI4MwXWkFAAh+QQJDQABACwAAAAAEAAQAAACJoQRcah7uaAzkrZZ2bTxupx14gZ6o5WUXeqV7Mm8D0u7dbretl4AACH5BAkNAAEALAAAAAAQABAAAAIjhBFxqHu5oDOStlnZtDH53nmX9ohjZp6pGa6o+5XwTNf2bRYAIfkEBQ0AAQAsAAAAABAAEAAAAiCEEXGoe7mgM5K2Wdm0qV/neRsTflH5oerKtu4Lx/JbAAA7) !important;
          margin: -8px auto auto -8px !important;
          background-position: initial initial !important;
          background-repeat: initial initial !important;
        }
        .et_bloom .et_bloom_1_field p.et_bloom_popup_input {
          width: 68%;
        }
        .et_bloom .et_bloom_header_outer {
          height: auto;
        }
        .et_bloom .et_bloom_popup .et_bloom_form_container {
          position: relative;
          z-index: 999999999;
          top: 290px;
          margin: 0 auto;
          opacity: 0;
        }
        .et_bloom .et_bloom_popup {
          display: none;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          position: fixed;
          z-index: 99999999;
        }
        .et_bloom .et_bloom_popup::after {
          content: "";
          background-color: rgba(0, 0, 0, 0.6);
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          position: fixed;
          opacity: 0;
        }
        .et_bloom .et_bloom_form_container_wrapper {
          position: relative;
        }
        .et_bloom .et_bloom_form_container,
        .et_bloom .et_bloom_form_container div,
        .et_bloom .et_bloom_form_container span,
        .et_bloom .et_bloom_form_container h2,
        .et_bloom .et_bloom_form_container p,
        .et_bloom .et_bloom_form_container strong {
          font-family: "Open Sans", helvetica, arial, sans-serif;
          line-height: 1em;
          text-transform: none;
          font-weight: 400;
          margin: 0;
          padding: 0;
          border: 0;
          outline: rgb(0, 0, 0);
          font-size: 100%;
          vertical-align: baseline;
          background-image: none;
          box-sizing: content-box;
          -webkit-font-smoothing: antialiased;
        }
        .et_bloom .et_bloom_form_container .clearfix::after {
          visibility: hidden;
          display: block;
          font-size: 0;
          content: " ";
          clear: both;
          height: 0;
        }
        .et_bloom .et_bloom_form_container {
          position: relative;
        }
        .et_bloom .et_bloom_form_container .et_bloom_close_button,
        .et_bloom .et_bloom_success_checkmark::before {
          font-family: ET-Bloom;
          speak: none;
          font-style: normal;
          font-weight: 400;
          font-variant: normal;
          text-transform: none;
          line-height: 1;
          -webkit-font-smoothing: antialiased;
          font-size: 16px !important;
        }
        .et_bloom .et_bloom_success_container {
          height: 0;
          overflow: hidden;
          opacity: 0;
          position: relative;
          z-index: -1;
          margin: 0 auto !important;
        }
        .et_bloom .et_bloom_form_container h2.et_bloom_success_message {
          line-height: 1.4em;
          position: relative;
          font-size: 14px;
          display: none;
          opacity: 0;
          z-index: -1;
          text-align: center;
          color: rgb(136, 136, 136);
          background-color: rgb(255, 255, 255);
          padding: 10px 10%;
          width: 80%;
          max-width: 300px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
          margin: auto;
          background-position: initial initial;
          background-repeat: initial initial;
        }
        .et_bloom h2.et_bloom_success_message::after {
          content: "";
          position: absolute;
          left: 50%;
          top: -5px;
          margin-left: -3px;
          width: 0;
          height: 0;
          border-left-width: 5px;
          border-left-style: solid;
          border-left-color: transparent;
          border-right-width: 5px;
          border-right-style: solid;
          border-right-color: transparent;
          border-bottom-width: 5px;
          border-bottom-style: solid;
          border-bottom-color: rgb(255, 255, 255);
        }
        .et_bloom .et_bloom_success_checkmark::before {
          content: "\e60e";
          line-height: 25px;
          font-size: 25px !important;
        }
        .et_bloom span.et_bloom_success_checkmark {
          opacity: 0;
          background-color: rgb(130, 192, 22);
          border-top-left-radius: 30px;
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
          border-bottom-left-radius: 30px;
          left: 50%;
          margin-left: -20px;
          -webkit-transform: rotate(180deg);
          display: block;
          height: 28px;
          width: 28px;
          position: absolute;
          top: 30px;
          color: rgb(255, 255, 255) !important;
          padding: 8px 7px 7px 10px !important;
          background-position: initial initial;
          background-repeat: initial initial;
        }
        .et_bloom .et_bloom_close_button::before {
          content: "\e60d";
          position: absolute;
          top: 7px;
          right: 7px;
        }
        .et_bloom .et_bloom_form_container .et_bloom_close_button {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 30px;
          height: 30px;
          border-top-left-radius: 30px;
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
          border-bottom-left-radius: 30px;
          background-color: rgb(255, 255, 255);
          -webkit-box-shadow: rgba(0, 0, 0, 0.341176) 0 2px 4px 0;
          box-shadow: rgba(0, 0, 0, 0.341176) 0 2px 4px 0;
        }
        .et_bloom .et_bloom_with_border .et_bloom_close_button {
          top: -13px;
          right: -13px;
        }
        .et_bloom .et_bloom_form_container {
          background-color: rgb(218, 223, 228);
          max-width: 640px;
          z-index: 999999999;
          -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0 0 60px;
          box-shadow: rgba(0, 0, 0, 0.2) 0 0 60px;
          -webkit-font-smoothing: antialiased;
        }
        .et_bloom .et_bloom_popup .et_bloom_form_container {
          width: 80%;
        }
        .et_bloom .et_bloom_form_container,
        .et_bloom .et_bloom_form_container div,
        .et_bloom .et_bloom_form_container .et_bloom_popup_input,
        .et_bloom .et_bloom_form_container input {
          box-sizing: border-box;
        }
        .et_bloom .et_bloom_form_container .et_bloom_form_header {
          background-color: rgb(255, 255, 255);
          padding: 15px;
          overflow: hidden;
          position: relative;
        }
        .et_bloom .et_bloom_form_container .et_bloom_form_text {
          max-width: 100%;
          padding: 15px;
          display: table-cell;
        }
        .et_bloom .et_bloom_form_header h2 {
          color: rgba(0, 0, 0, 0.8);
          -webkit-font-smoothing: antialiased;
          font-size: 24px !important;
          padding-bottom: 0px !important;
          font-weight: 600 !important;
          line-height: 1.1em !important;
        }
        .et_bloom .et_bloom_form_header p {
          color: rgba(0, 0, 0, 0.498039);
          line-height: 1.6em;
          font-size: 14px;
          margin-top: 0.5em;
        }
        .et_bloom .et_bloom_form_container .et_bloom_form_content {
          padding: 40px 30px;
          color: rgba(0, 0, 0, 0.498039);
          width: 100%;
          background-color: rgb(233, 233, 233);
          position: relative;
        }
        .et_bloom .et_bloom_form_container .et_bloom_form_content input {
          display: block;
        }
        .et_bloom .et_bloom_form_container .et_bloom_form_content span {
          color: rgb(68, 68, 68);
          font-weight: 700 !important;
          margin-bottom: 10px !important;
        }
        .et_bloom .et_bloom_form_container .et_bloom_form_content input {
          background-color: rgb(255, 255, 255);
          width: 100%;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.498039);
          box-sizing: border-box;
          border: none;
        }
        .et_bloom .et_bloom_form_container .et_bloom_form_content input {
          padding: 14px !important;
        }
        .et_bloom
          .et_bloom_form_container
          .et_bloom_form_content
          .et_bloom_popup_input
          input {
          padding: 10px !important;
        }
        .et_bloom .et_bloom_popup_input input::-webkit-input-placeholder {
          -webkit-font-smoothing: antialiased;
        }
        .et_bloom .et_bloom_form_container.et_bloom_rounded input,
        .et_bloom .et_bloom_form_container.et_bloom_rounded button {
          border-top-left-radius: 3px !important;
          border-top-right-radius: 3px !important;
          border-bottom-right-radius: 3px !important;
          border-bottom-left-radius: 3px !important;
        }
        .et_bloom .et_bloom_optin .et_bloom_border_solid {
          border: 6px solid rgb(79, 168, 237);
        }
        .et_bloom .et_bloom_form_content .et_bloom_popup_input {
          float: left;
          width: 34%;
          padding-right: 20px;
        }
        .et_bloom .et_bloom_form_content button {
          width: 32%;
          background-color: rgb(70, 200, 200);
          color: rgb(255, 255, 255);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
        }
        .et_bloom .et_bloom_form_content input,
        .et_bloom .et_bloom_form_content button {
          padding: 10px;
          font-family: "Open Sans", sans-serif;
          font-size: 14px;
        }
        .et_bloom .et_bloom_button_text {
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgb(255, 255, 255) !important;
          font-weight: 600 !important;
          margin-bottom: 0px !important;
        }
        .et_bloom
          .et_bloom_form_container.et_bloom_form_text_dark
          .et_bloom_form_content
          span.et_bloom_button_text.et_bloom_button_text_color_dark {
          color: rgba(0, 0, 0, 0.701961) !important;
        }
        .et_bloom .et_bloom_form_header .et_bloom_form_text {
          max-width: 100%;
          padding: 15px;
          display: block;
          clear: both;
        }
        .et_bloom_form_container .et_bloom_form_content .et_bloom_fields {
          height: 100%;
        }
        @media only screen and (max-width: 767px) {
          .et_bloom .et_bloom_form_content {
            clear: both;
          }
        }
        @media screen and (max-width: 640px) {
          .et_bloom .et_bloom_form_container .et_bloom_popup_input {
            padding-right: 0px !important;
          }
          .et_bloom .et_bloom_form_container .et_bloom_form_header,
          .et_bloom .et_bloom_form_container .et_bloom_popup_input,
          .et_bloom .et_bloom_form_container button {
            width: 100% !important;
            max-width: 100% !important;
            float: left !important;
          }
          .et_bloom .et_bloom_bottom_inline p.et_bloom_popup_input {
            padding-bottom: 10px;
          }
        }
        @media screen and (max-width: 479px) {
          .et_bloom .et_bloom_form_text {
            text-align: center;
          }
        }
      `}</style>
      <Box dangerouslySetInnerHTML={{ __html: content }}></Box>
    </Box>
  );
};

export default ShowPost;
