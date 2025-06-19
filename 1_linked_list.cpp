
#include<iostream>
using namespace std;

class Node
{
    public:
    int data;
    Node *next;  // pointer 

    Node(int val=0) // parameterised constructor
    {
        data=val;
        next=NULL;
    }
};


int main()
{
    Node *a=new Node(10);
    Node *b=new Node(-3);
    Node *c=new Node(99);

  a-> next=b;

  b->next=c;

  Node *head=a;

  while(head!=NULL)
  {
    cout<<head->data<<" ";
    head=head->next;
  }
return 0;
}