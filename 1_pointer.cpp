#include<iostream>
using namespace std;
int main()
{
int c=100;

int *p=&c;

*p=120;

cout<<*p<<" "<<p<<" "<<c<<endl;
return 0;
}



