'use strict';

var NodeRSA = require('node-rsa');
var privateKey = 'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAI6FDzV8kQoj9vT6Iq0rT9Y3vBwwkq4YvlCHO5EPIUsIANso+QHu4Yp+RDVANye2NnyTj6bHagYEoXkTW9IH5sPtI/t+RKAOZ0LMYtIlfThD0f3nG4R8WxNfBbx0aHi5AMW391MhjZYDHxGcaGIkUqrrL2aP61yh+fMttA1/LY+hAgMBAAECgYBuMZNA17+NB6G6aGzHV+WyzAU2Bphi497ChM0Zq4kial2/Fj7xr7HTUy2Jvszmd4xJZg579VOUs5/l7YHhMxrI2sUadaenkdJ/LmdHICRT4BAFdDnM78UsY1/YgtoA06r63ZkaE6PJ2UPMCgcYMqV5OkAFwt8oTDSGlBb4EZuUAQJBAMbR+tolF96tHPb96BKbowIytRQZpC3KMutnzY74davY4BvAnvzoUTs0d89Xi+1+YxmI0UahejGdyMEWOryNJYkCQQC3gf3B8Kmaic3hz1ghslsdY5n1sE8piJH/9owvToc54MVQc9sfFC9f+e6v8yjblHFeaoYTL6NUz9MUmeHAgatZAkB+VGnaNnuGR+UBo6/UMwROnz2jue8yESptnZVlZMYQHUu5FplvBYan4dzG6E/G5em+Dcs739qusB0hYyiLKfxRAkAiGKweqenJhgtUBqOYdzxIxKXpqZ272N1P0u6PJ6cmkOX4od438xcuXREFbkfMLNO3uFE7JWHSs17D+CejDjTZAkAWlJVrwvcgdPDun/xF2FK8YoonJFPJxFD/jrVPuoZ+HxYa9sytwuaAU8jTv8WDF4er1ZO4N3TENE+SedxuH0zW';

var key = NodeRSA(privateKey, 'pkcs8-private-pem', { 'environment': 'node', 'encryptionScheme': 'pkcs1', 'signingScheme': 'sha256' });

var encryptedData = key.encrypt('hello world', 'base64');
console.log(encryptedData);
var decryptedData = key.decrypt(encryptedData, 'utf-8');
console.log(decryptedData);