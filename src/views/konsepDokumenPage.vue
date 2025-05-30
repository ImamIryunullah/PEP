<template>
    <section class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div class="w-full max-w-6xl h-[90vh] bg-white rounded-xl shadow-xl overflow-hidden">
        <iframe :src="pdfUrl" class="fixed inset-0 w-full h-full border-none z-50"></iframe>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'PdfViewer',
    data() {
      return {
        pdfUrl: '/dokumen/konsep.pdf' 
      };
    }
  };
  </script>
  