from django.shortcuts import render

# Create your views here.
def home(request):
    

    return render(request, 'index.html')

def contact(request):
    

    return render(request, 'contact-us.html')

def FAQs(request):
    

    return render(request, 'about-us/faqs.html')


def history(request):
    

    return render(request, 'about-us/history.html')

def news(request):
    

    return render(request, 'about-us/news.html')

def operate(request):
    

    return render(request, 'about-us/operate.html')

def overview(request):
    

    return render(request, 'about-us/overview.html')



def downloads(request):
    

    return render(request, 'governance/downloads.html')

def dpa(request):
    

    return render(request, 'governance/dpa.html')

def enquiry(request):
    

    return render(request, 'governance/enquiry.html')

def policy(request):
    

    return render(request, 'governance/policy.html')

def prod_and_services(request):
    

    return render(request, 'prod&services/prod&services.html')

def edms(request):
    

    return render(request, 'prod&services/edms.html')

def scanning(request):
    

    return render(request, 'prod&services/scanning.html')

def shredding(request):
    

    return render(request, 'prod&services/shredding.html')

def sos(request):
    

    return render(request, 'prod&services/sos.html')

def storage(request):
    

    return render(request, 'governance/storage.html')

def dials(request):
    

    return render(request, 'dials.html')